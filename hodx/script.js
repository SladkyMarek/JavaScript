function funkce(e)
{
    console.log(e, "text")
}

let jmeno
const email = /([\w+-]\.?)+@+[a-z.-]+\.[a-zA-z]{2,}/g


document.getElementById("number")
.addEventListener("change", (e)=> {jmeno = e.target.value})

document.getElementById("submit").addEventListener("click", funkce(jmeno))