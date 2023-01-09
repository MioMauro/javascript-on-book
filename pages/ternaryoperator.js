//Ternary operator = </h3><br>
//Shortcut for an if/else statement
//Takes 3 operands

        //1. a condition with?
        //2. expression if True :
        //3. expression if False
        
// conditio ? expIfTrue : expIfFalse

/*
let adult = checkAge(21)
console.log(adult)

function checkAge(age){
        if(age >= 18){ // is equal or greater than 18
          return true // return boolean true
        }
        else {
                return false
        }
}
*/

/*
let adult = checkAge(12)
console.log(adult)

function checkAge(age){
        return age >= 18 ? true : false // return if equal or greater than 18, otherwise is false
}
*/

checkWinner(true)
function checkWinner(win){
win ? console.log('You win!') : console.log('You lose!') // if win is true, otherwise is false
}