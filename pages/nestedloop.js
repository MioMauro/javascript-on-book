//nested loop
/*
for(let i = 1; i <= 3; i+=1){
    console.log(i)
}
*/



let rows = window.prompt('Enter # of rows')
let columns = window.prompt('Enter # of columns')

for(let i = 1; i <= rows; i+=1){
    for(let j = 1; j <= columns; j+=1){
        document.getElementById('rectangle').innerHTML += j
    }
    document.getElementById('rectangle').innerHTML += "<br>"
}



/*
let symbol = window.prompt('Enter a symbol to use')
let rows = window.prompt('Enter # of rows')
let columns = window.prompt('Enter # of columns')

for(let i = 1; i <= rows; i+=1){
    for(let j = 1; j <= columns; j+=1){
        document.getElementById('rectangle').innerHTML += symbol
    }
    document.getElementById('rectangle').innerHTML += "<br>"
}
*/