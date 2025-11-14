/*
Uloha1
    Hello world
    vypsat do konzole
    console.log
    console.warning a console.error
*/

console.log("Konzole")
console.error("Error")
console.warn("Warn")
console.table(["1","2","3"])
//window.alert("#########")




function calc(){
    let input1 = document.getElementById("num1")
    let input2 = document.getElementById("num2")
    
    let sum = input1 + input2
    
    console.log(sum)
}


document.getElementById("screen").innerText(`Součet: $(sum)`)