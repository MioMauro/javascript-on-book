// variable is a container storing data
// Declaration - var, let, const)
// Assignment ( = operator )

// let age;
// console.log(age) //result undefined

// age = 21;
// console.log(age) //result 21

// let age = 21;
// console.log(age) //result 21


/*
let firstName = "Bro";  // string
let age = 21;  //number
let student = true; // booleans

age = age + 1; //result 22

console.log(firstName) //result Bro
console.log(age) //result 21
console.log(student) //result true
*/


let firstName = "Bro";  // string
let age = 21;  //numbers
let student = true; // booleans

console.log("Hello", firstName) //result. Hello Bro
console.log("You are", age, "years hold") //result. You are 21 years hold
console.log("enrolled", student) //result true

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;