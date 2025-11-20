let button = document.getElementById("button")
let isBlack = false
button.addEventListener("click", function() {
    if (!isBlack) {
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
        isBlack = true
    }
    else {
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
        isBlack = false
        
    }
})
