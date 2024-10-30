// import { itemPrices } from '/src/script2.js';
const table = document.querySelector(".myTable")

const tableBody = table.querySelector("tbody");
const tableHead = table.querySelector("thead tr");
const personList=[];
const itemList=[];
let personId = 0;
let itemId = 0;


var checkboxes = document.querySelectorAll("input[type=checkbox]");

table.addEventListener("change",(e) => {

    if (e.target && e.target.type === "checkbox" && e.target.parentElement.parentElement.id) {
        let personIndex=e.target.parentElement.className;
        let itemIndex=e.target.parentElement.parentElement.id;

        let currPerson = personList[personIndex];
        let currItem = itemList[itemIndex];
        if (e.target.checked) {
            currItem.addPersonToItem(currPerson);
            currPerson.addItemToPerson(currItem);
            
          
        } else {
            currItem.removePersonFromItem(currPerson);
            currPerson.removeItemFromPerson(currItem);
            
        }
      }

      displayTotal();
})


document.querySelector("#addRow").addEventListener("click", readItem);
// a=document.querySelector("#addRow");
// console.log(a);
document.querySelector(".add.person").addEventListener("click",readPerson);

function addItem(item){

    itemList.push(item);

    // Create a new row and cells
    const newRow = document.querySelector(".row").cloneNode(true);
    newRow.id=(itemId);
    itemId+=1;
    const itemCell = newRow.querySelector(".item");
    const priceCell = newRow.querySelector(".price");
    
    // Set the text content for the cells
    itemCell.textContent = item.product;
    priceCell.textContent = item.price;

    tableBody.append(newRow);    
};

function readItem(){
    // Clear input fields
    const product = document.querySelector(".item.input").value;
    const price = document.querySelector(".price.input").value;
    // Get input values
    document.querySelector(".item.input").value = '';
    document.querySelector(".price.input").value = '';
    let item = new Item(product, price);
    addItem(item);
}

function addPerson(person){       
    personList.push(person);

    //create person header
    const nameCell = document.createElement("th");
    nameCell.textContent=person.name;
    tableHead.append(nameCell);

    
    //add checkbox to every row
    for(let i=0; i <  tableBody.rows.length; i++){
        const newCell = document.createElement("td");
        const checkbox = Object.assign(document.createElement("input"), {
            type: "checkbox",
            className: "my-checkbox-class"
        });
        // if(i>0)
            newCell.append(checkbox);
        newCell.classList.add(personId);
        tableBody.rows[i].append(newCell);
    }
    personId+=1;
}

function readPerson(){
    const name = document.querySelector("#nameInput").value;
    let person = new Person(name)
    addPerson(person);
}


function Person(name) {
    this.name = name;
    this.total = 0;
    this.items = new Set([]);


}
Person.prototype.addItemToPerson = function(item){
    
    this.items.add(item);
    // this.calculateTotal();
    
}
Person.prototype.removeItemFromPerson = function(item){
    this.items.delete(item);
    // this.calculateTotal();
    
}
Person.prototype.calculateTotal = function(){
    this.total = Array.from(this.items).reduce((total, item) => total + item.pricePerPerson, 0);
}




function Item(product, price) {
    this.product = product;
    this.price = price;
    this.pricePerPerson = 0;
    this.persons = new Set([]);
 
}
Item.prototype.calculatePricePerPerson = function() {
    
    if (this.persons.size > 0) {
        this.pricePerPerson = this.price / this.persons.size;
    } else {
        // console.log("No persons available for calculation.");
        this.pricePerPerson = 0; // Default or error value
    }
}
Item.prototype.addPersonToItem = function(person){
    this.persons.add(person);
    this.calculatePricePerPerson();
}
Item.prototype.removePersonFromItem = function(person){
    this.persons.delete(person);
    this.calculatePricePerPerson();
}





// function 
addItem(new Item("ranch", 10));
addItem(new Item("apple juice", 20));
addPerson(new Person("ali"));
addPerson(new Person("abu"));

let totalElement = document.querySelector(".total");


function displayTotal(){
    let totalSec = document.createElement("div")
    for(const keys in personList){
        let person = personList[keys];
        person.calculateTotal();
        totalSec.append(`<p>Name: ${person.name}, Total: ${person.total}, 
            item: ${[...person.items].map(
                item => item.product
            ).join(', ')}</p>`);
        
    }
    // console.log(totalSec)
    totalElement.innerHTML = totalSec.textContent;
}

displayTotal();

// a=document.querySelector(".w_U9_0");
// console.log(a)
// var a =document.querySelector("link[rel=import][href='src/wm.html']")
// .import.querySelector(".#f5 b black tr");

