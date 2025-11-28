/* Uloha 1
let text = prompt("Slovo:")
let pocet = 0

for(let znak in text) {
    ++pocet
}
console.log(pocet)
*/

// v poli slov vypsat pocet pismen pro kazde slovo a prepsat tuto hodnotu poctem pomoci map funkce

let slovo = ["pes", "kocka", "mys"]

slovo.map(delka => console.log(slovo.length))