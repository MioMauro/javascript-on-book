//let x = Math.random()
//console.log(x)

//let x = Math.random() * 6
//console.log(x)

let x 
let y 
let z 

document.getElementById("rollButton").onclick = function(){
    x = Math.floor(Math.random() * 6) + 1
    y = Math.floor(Math.random() * 6) + 1
    z = Math.floor(Math.random() * 6) + 1

    document.getElementById("xLabel").innerHTML = x
    document.getElementById("yLabel").innerHTML = y
    document.getElementById("zLabel").innerHTML = z
}