
/*
let userName = "Bro"
let age = 22

happy()

function happy(){
console.log("Happy new year")
console.log("Happy new year bro!")
console.log("Happy new year Mauro!")
console.log("Happy new year Elena!")
console.log("Happy birthday dear", userName, "Now you are", age, "years old")
}
*/



//possiamo usare le variabili in differenti funzioni
//importante è inserirle tra le parentesi della funzioone
//devono essere uguali

/*
startProgram()

function startProgram(){
    let userName = "Bro"
    let age = 22

    happy(userName, age) 
}

function happy(userName, age){
    console.log("Happy new year")
    console.log("Happy new year bro!")
    console.log("Happy new year Mauro!")
    console.log("Happy new year Elena!")
    console.log("Happy birthday dear", userName, "Now you are", age, "years old")
    }
*/

//Same result in a different way
    startProgram()

function startProgram(){
    let userName = "Bro"
    let age = 22

    happy(userName, age) 
}

function happy(a, b){
    console.log("Happy new year")
    console.log("Happy new year bro!")
    console.log("Happy new year Mauro!")
    console.log("Happy new year Elena!")
    console.log("Happy birthday dear", a, "Now you are", b, "years old")
    }




