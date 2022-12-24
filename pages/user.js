//let username = window.prompt("What's your name?")
//console.log(username)


let username
document.getElementById("inputButton").onclick = function(){
    username = document.getElementById("inputText").value
    console.log(username);
    document.getElementById("inputLabel").innerHTML = "Hello " +  username
}