// Gives us the ability to check more that 1 condition concurrently
// && AND (BOTH conditions must be true)
// || or (Either conditions can be true)

/*
let temperature = 15

if(temperature > 0 && temperature < 30){
    console.log("The weather is good")
}
else {
    console.log("The weather is bad")
}
*/
/*
let temperature = 50

if(temperature <= 0 || temperature >= 30){
    console.log("The weather is bad")
}
else {
    console.log("The weather is good")
}
*/

let temperature = 15
let sunny = true

if(temperature > 0 && temperature < 30 && sunny){
    console.log("The weather is bad")
}
else {
    console.log("The weather is good")
}


