function funkce(e)
{
    console.log(e, "text")
}

let jmeno


document.getElementById("number")
.addEventListener("change", (e)=> {jmeno = e.target.value})

document.getElementById("submit").addEventListener("click", funkce(jmeno))