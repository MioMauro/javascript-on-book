

/*
console.log("Hello", userName)
console.log("You have", items, "items in your cart")
console.log("Your total is $", total)
*/

/*
console.log(`Hello, ${userName}`)
console.log(`You have ${items} items in your cart`)
console.log(`Your total is $: ${total}`)
*/

let userName = "Bro"
let items = 3
let total = 75

let text = `Hello, ${userName}<br>
You have ${items} items in your cart<br>
Your total is $: ${total}<br>`

document.getElementById("myLabel").innerHTML = text
