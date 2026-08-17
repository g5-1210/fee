// 1. Functions and objects.
// An object is a collection of key-value pairs that stores related information.
// Here, the object is created without using a class.

// 2. for...of loop.
// It is used to directly access the values of an iterable such as an array or string.
// It does not require an index or counter variable.

// 3. forEach loop.
// forEach() runs a given function once for every element of an array.

// Arrow function is a shorter way of writing a function.
// Callback function is a function passed as an argument to another function.

// Callback hell (also known as the "Pyramid of Doom") happens when multiple
// asynchronous callbacks are nested inside each other, making the code difficult
// to read and maintain.

// JavaScript also performs automatic type conversion.
// Example 1: 5 + 5 = 10, 5 + "5" = "55", 5 - "5" = 0.
// Example 2: 5 == "5" gives true because == checks only the value.
// Example 3: 5 === "5" gives false because === also checks the data type.

// JavaScript uses JIT (Just-In-Time) compilation.


console.clear();
const prompt=require("prompt-sync")();


// 1. Inventory Entry System

console.log("inventory entry system");
console.log();

let stock=[];


// This function takes the details of one item from the user
// and stores them together as an object.
function addStock() 
{
    let item_code=Number(prompt("enter item code : "));
    let item_name=prompt("enter item name : ");
    let item_price=Number(prompt("enter item price : "));
    let item_quantity=Number(prompt("enter item quantity : "));

    let item={
        code:item_code,
        item:item_name,
        price:item_price,
        quantity:item_quantity
    };

    // Add the newly created object to the stock array.
    stock.push(item); // now stock is an array of objects.

    console.log("\ninventory updated.");
    console.log();
}


// Keep asking for item details until the user chooses to stop.
while (true){
    addStock();

    let loop=prompt("add more items (0 for no / 1 for yes) : ");
    loop=parseInt(loop);

    if (loop==0) break;
}


console.log("\ninventory entry completed.");
console.log("\nupdated stock is as follows : ");
console.log(stock);
console.log();


// 2. for...of loop

// Directly access each object from the stock array
// and display only the item name.
for (let element of stock){
    console.log(element.item, "\n");
}


// 3. forEach loop

// forEach() visits every object in the stock array.
// The arrow function is used here as a callback function.
stock.forEach((element)=>{console.log(element.price);}); // demo of callback function.