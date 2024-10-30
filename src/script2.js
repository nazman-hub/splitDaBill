price = document.querySelector(".f5.b.black.tr");
item= document.querySelector(".w_V_DM");
var items= document.querySelectorAll(".w_V_DM");
var prices = document.querySelectorAll(".f5.b.black.tr");

var pricesArr = [];
var itemsArr = [];
prices.forEach((element) => {
    // Perform actions on each element
    pricesArr.push(element.textContent.slice(1));
});
items.forEach((element) => {
    // Perform actions on each element
    itemsArr.push(element.textContent);
});
// console.log(item.innerText)
// console.log(pricesArr)
// console.log(itemsArr)
let itemPrices = new Map();

for(var i=0; i<itemsArr.length; i++){
    itemPrices.set(itemsArr[i], pricesArr[i]);
}

console.log(itemPrices)

export { itemsPrices };
