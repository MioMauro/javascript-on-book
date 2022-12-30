/*
document.getElementById("myButton").onclick = function(){
    if(document.getElementById("myCheckBox").checked){
        console.log("you are subscribed!")            
        } else{
            console.log("You are not subscribed!")
        }
    }
    */

    document.getElementById("button").onclick = function(){

        const myCheckBox = document.getElementById("myCheckBox")
        const vistaBtn = document.getElementById("visaBtn")
        const mastercardBtn = document.getElementById("mastercardBtn")
        const paypalBtn = document.getElementById("paypalBtn")

        if(myCheckBox.checked){
            console.log("you are subscribed!")            
        } else {
        console.log("You are not subscribed!")
        }

        if(vistaBtn.checked){
            console.log("You are paying with VISA")
        }
        else if(mastercardBtn.checked){
            console.log("You are paying with MASTERCARD")
        }
        else if(paypalBtn.checked){
            console.log("You are paying with PAYPAL")
        }
        else {
            console.log("You must select a payment type!")
        }
    } 