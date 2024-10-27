// var checkbox = document.querySelector("input[type=checkbox]");

var checkboxes = document.querySelectorAll("input[type=checkbox]");

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
        e.target.checked ?
        console.log("Checkbox is checked..") :
        console.log("Checkbox is not checked..");
        
        
    });
});

document.querySelector(".add.button").addEventListener("click",e=>{
    const tableBody = document.querySelector(".myTable tbody");
        
        // Get input values
        const item = document.querySelector(".item.input").value;
        const price = document.querySelector(".price.input").value;





        // Append cells to the new row

        // newRow.appendChild(itemCell);
        // newRow.appendChild(quantityCell);

        // Append the new row to the table body
        // tableBody.appendChild(newRow);
        newRow = document.querySelector(".row").cloneNode(true);


        // Create a new row and cells
        const itemCell = newRow.querySelector(".item");
        const priceCell = newRow.querySelector(".price");
        // Set the text content for the cells
        itemCell.textContent = item;
        priceCell.textContent = price;
        // quantityCell.textContent = price;
        tableBody.append(newRow)


        // Clear input fields
        document.querySelector(".item.input").value = '';
        document.querySelector(".price.input").value = '';
});