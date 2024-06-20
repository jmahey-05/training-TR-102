

const displayitem_1 = document.getElementById("displayitem-1");
const displayitem_1price = document.getElementById("displayitem-1price");
const displayitem_2 = document.getElementById("displayitem-2");
const displayitem_2price = document.getElementById("displayitem-2price");
const displayBill = document.getElementById("displayBill");
const btn = document.getElementById("btn");

btn.addEventListener("click", () =>{
    const item1 = document.getElementById("item-1").value;
const item1_price = document.getElementById("item-1-price").value;
const item2 = document.getElementById("item-2").value;
const item2_price = document.getElementById("item-2-price").value;

    displayitem_1.innerText = item1; 
    displayitem_1price.innerText = item1_price; 
    displayitem_2.innerText = item2; 
    displayitem_2price.innerText = item2_price; 
    displayBill.innerText = `Total Bill ${Number(item1_price)+Number(item2_price)}`;
})