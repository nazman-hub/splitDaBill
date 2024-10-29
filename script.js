// var checkbox = document.querySelector("input[type=checkbox]");

var checkboxes = document.querySelectorAll("input[type=checkbox]");
const listOfPersons = [];
const listOfItems = [];
document.querySelector(".myTable tbody").addEventListener("change",(e) => {
    if (e.target && e.target.type === "checkbox") {
        if (e.target.checked) {
          console.log("Checkbox is checked!");
        } else {
          console.log("Checkbox is unchecked.");
        }
      }
})

// checkboxes.forEach(checkbox => {
//     checkbox.addEventListener('change', (e) => {
//         console.log(e);
//         e.target.checked ?
//         console.log("Checkbox is checked..") :
//         console.log("Checkbox is not checked..");
        
        
//     });
// });
document.querySelector(".add.row").addEventListener("click",addRow);
document.querySelector(".add.person").addEventListener("click",addPerson);

function addRow(){

    const tableBody = document.querySelector(".myTable tbody");
        
    // Get input values
    const item = document.querySelector(".item.input").value;
    const price = document.querySelector(".price.input").value;
    newRow = document.querySelector(".row").cloneNode(true);

    // Create a new row and cells
    const itemCell = newRow.querySelector(".item");
    const priceCell = newRow.querySelector(".price");
    
    // Set the text content for the cells
    itemCell.textContent = item;
    priceCell.textContent = price;

    listOfItems.push(new Item(item, price))

    // quantityCell.textContent = price;
    tableBody.append(newRow);

    // Clear input fields
    document.querySelector(".item.input").value = '';
    document.querySelector(".price.input").value = '';
};

function addPerson(){
    const table = document.querySelector(".myTable")


    const tableHead = table.querySelector("thead tr");
        
    // Get person name
    const name = document.querySelector("#nameInput").value;
    listOfPersons.push(new Person(name));

    //create person header
    const nameCell = document.createElement("th");
    nameCell.textContent=name;
    tableHead.append(nameCell);

    const tableBody = table.querySelector("tbody");
    
    //add checkbox to every row
    for(let i=0; i <  tableBody.rows.length; i++){
        const newCell = document.createElement("td");
        const checkbox = Object.assign(document.createElement("input"), {
            type: "checkbox",
            className: "my-checkbox-class"
        });
        newCell.append(checkbox);
        tableBody.rows[i].append(newCell);

    }
    
    
    

};

function Person(name) {
    this.name = name;
    this.total = 0;
    console.log(listOfPersons);


}
function Item(item, price) {
    this.item = item;
    this.price = price;
    // console.log(item, price)
    console.log(listOfItems);
}



