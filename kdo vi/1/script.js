let Uzivatel = {
    id: 67,
    username: "Uzivatel 1",
    passwd: "xxx",
    atWork: true,
    male: false,
    age: 30,
    isWhite: true,
    role: "admin",
}

console.log(Uzivatel.isAdmin)

Uzivatel.isAdmin = true

console.log(Uzivatel.isAdmin)
/*
Uzivatel.id = "3"

console.log(Uzivatel.id)
*/

console.log(Uzivatel.age)