//return = returns a value back to the place
// where you invoked a function

/*
// calculating area rectangle
let area
let width
let height

width = window.prompt("Enter width") // typed 5 
height = window.prompt("Enter height") // typed 6

area = getArea(width, height)

console.log("The area is:", area)

function getArea(width, height){
    let result = width * height // return variable
    return result 
}
*/

let area
let width
let height

width = window.prompt("Enter width")
height = window.prompt("Enter height")

area = getArea(width, height)

console.log("The area is:", area)

function getArea(width, height){
    let result = width * height 
    return result
}


