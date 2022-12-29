// slice() extracts a section of a string
// ... and returns it as a new string,
//... without modifying the original string

//let fullName = "Bro Code"
//let firstName
//let lastName

//lastName = fullName.slice(4) //cut the first 4 spaces

//console.log(lastName)

let fullName = "Bro Code"
let firstName
let lastName

lastName = fullName.slice(fullName.indexOf(" ") + 1)

console.log(lastName)



