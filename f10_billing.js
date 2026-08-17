// Arrays and loops.
// An array stores multiple values in a single variable.
// .push() adds elements to the end of an array.
// .pop() removes the last element from an array.
// This program has two parts:
// 1. Store inventory
// 2. Billing system


console.clear();
const prompt = require("prompt-sync")();


// 1. Store Inventory

const store="SEVEN ELEVEN (7/11)";
console.log(store);
console.log();


// Store item names and their prices in separate arrays.
let items=["item1", "item2", "item3"];
let prices=[2000, 5000, 3000];


// Display the current items and number of items.
console.log(items);
console.log(items.length);
console.log();


// Display the prices and number of prices available.
console.log(prices);
console.log(prices.length);
console.log();


// Add new items to the inventory.
items.push("item4","item5"); 
console.log(items);
console.log(items.length);
console.log();


// Add prices for the newly added items.
prices.push(3000,3500);
console.log(prices);
console.log(prices.length);
console.log();


// Remove the last item from the inventory.
items.pop(); 
console.log(items);
console.log(items.length);
console.log();


// Remove the last price as well.
prices.pop();
console.log(prices);
console.log(prices.length);
console.log();


// 2. Billing System

console.log("Billing System");
console.log();


// Display all available items with their serial numbers and prices.
console.log("Serial No.\t Items\t Price");

for(let i = 0; i<items.length; i++)
{
    console.log((i+1) + "\t\t", items[i] + "\t " + prices[i]);
}

console.log();


// Take the item number selected by the customer.
let serialnumber = Number(prompt("Enter Item No. : "));
console.log();


// Check whether the entered item number is available.
if (serialnumber < 1 || serialnumber > items.length) {
    console.log("Invalid Item Number!");
    return;
}


// Ask for the quantity of the selected item.
let quantity = Number(prompt("Enter Quantity : "));

console.log();


// Get the price using the selected item's position in the array.
let price = prices[serialnumber-1];


// Calculate the total cost before applying the discount.
let cost= price*quantity;
let discount = 0;


// Apply discount according to the total cost.
if (cost>=5000) {
    discount = cost*0.05;
}
else if (cost>=2000) {
    discount = cost *0.02;
}
else {
    discount = cost * 0.01;
}


// Display the final bill details.
console.log("Total Cost is :", cost)
console.log("Your Discount is :", discount)
console.log("Your Bill Amount is :", cost-discount);
console.log();