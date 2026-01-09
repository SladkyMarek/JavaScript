/* ============================================
   🔵 ÚKOLY 31–40: Funkce, události a práce s DOM
   ============================================ */

/* 31) Po kliknutí na tlačítko zobraz alert „Ahoj světe!“.
      - Vytvoř funkci, která zobrazí alert.
      - Použij událost onclick nebo addEventListener.
*/

      document.getElementById("btn31")
            .addEventListener('click', () => alert("Hello world"))

/* 32) Po kliknutí na tlačítko změň text vybraného HTML elementu.
      - Napiš funkci, která změní .textContent nebo .innerText.
      - Vyzkoušej použití arrow funkce.
*/

      document.getElementById("btn32")
      .addEventListener('click', () => document.getElementById("text32").innerText = "Zmena textu")
      

/* 33) Vypiš do <div> aktuální čas, který se bude každou sekundu aktualizovat.
      - Použij setInterval a vlastní funkci pro získání času.
      - Funkce by měla vracet formátovaný čas (HH:MM:SS).
*/

      setInterval(() => {
            let cas = new Date()
            let H = cas.getHours()
            let M = cas.getMinutes()
            let s = cas.getSeconds()

            document.getElementById("clock33").innerHTML = `${H}:${M}:${s}`
      }
      )

/* 34) Po kliknutí na tlačítko změň barvu pozadí celé stránky.
      - Vytvoř funkci s parametrem (barva).
      - Vyzkoušej nastavit hodnotu přes document.body.style.
*/

      document.getElementById("btn34")
            .addEventListener('click', () => document.body.style.backgroundColor = "black")

/* 35) Po najetí myší na obrázek ho zvětši.
      - Použij eventy mouseover a mouseout.
      - Změnu proveď pomocí třídy v CSS nebo style.width v JS.
*/

      let img35 = document.getElementById("img35")
      img35.addEventListener('mouseover', () => img35.style.width = "400px")
      img35.addEventListener('mouseleave', () => img35.style.width = "200px")

/* 36) Po odeslání formuláře vypiš hodnoty inputů do konzole.
      - Zakázat přirozené odeslání formuláře pomocí event.preventDefault().
      - Použij funkci, která načte hodnoty inputů.
*/

      document.getElementById("form36")
            .addEventListener('submit', function (e) {})

/* 37) Vytvoř jednoduché „počítadlo kliknutí“.
      - Po každém kliknutí zvýší číslo o 1 a zobraz ho v HTML.
      - Proměnná se musí nacházet ve správném scope.
*/
      let btn37 = document.getElementById("btn37")
      let cislo = 0
      btn37.addEventListener('click', () => cislo++)
      btn37.addEventListener('click', () => document.getElementById("counter37").innerText = cislo)

/* 38) Po kliknutí na tlačítko skryj nebo zobraz text.
      - Můžeš použít classList.toggle().
      - Zvaž použití anonymní nebo arrow funkce.
*/



let shownText = true
let btn38 = document.getElementById("btn38")

btn38.addEventListener('click', function() {
      if (!shownText) {
            document.getElementById("text38").style.color = "white"
            shownText = false
      }
      else {
            document.getElementById("text38").style.color = "black"
            shownText = true
      }
})


/* 39) Validuj formulář – zkontroluj, jestli je vyplněné jméno a e-mail.
      - Pokud není validní, zobraz chybovou hlášku.
      - Použij jednoduchou podmínku a funkci validateForm().
*/

/* 40) Pomocí slideru (input type="range") měň velikost písma textu.
      - Po změně hodnoty aktualizuj style.fontSize.
      - Hodnota ze slideru bude vstupním parametrem funkce.
*/


/* =====================================================
   Práce s formuláři a uživatelskými daty – obecné úkoly
   ===================================================== */

/* - Nauč se načíst hodnoty z inputů pomocí .value.
   - Vytvoř funkci, která validuje hodnoty podle podmínek.
   - Dynamicky aktualizuj HTML podle vstupních dat
     (např. okamžitý výpočet ceny, filtrování seznamu apod.).
*/


/* ================================================
   🟣 ÚKOLY 41–50: Pokročilejší logika a práce s daty
   ================================================ */

/* 41) Generuj náhodné heslo z písmen, číslic a symbolů.
      - Funkce přijme délku jako parametr.
      - Použij Math.random a vlastní pole znaků.
*/

      function generatePassword(x){
            const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789#&@$ß€~/*-+"
            let passwd = "";
            for(let i = 0; i < x; ++i){
                  const index = Math.floor(Math.random()*chars.length)
                  passwd += chars[index]
            }
            return passwd
      }

/* 42) Spočítej faktoriál zadaného čísla.
      - Vytvoř klasickou funkci nebo arrow funkci.
      - Vyzkoušej rekurzi nebo cyklus.
*/

/* 43) Zjisti, zda je text palindrom („kajak“, „oko“).
      - Vytvoř funkci, která vrací true/false.
      - Odstraň mezery a porovnej text pozpátku.
*/

/* 44) Vytvoř jednoduché stopky – Start / Stop / Reset.
      - Použij setInterval a clearInterval.
      - Funkce musí správně pracovat s proměnnými ve scope.
*/

let interval = null
let time = 0
let H = 0
let M = 0
let S = 0

function startTimer() {
      if(interval)return
      interval = setInterval(() => {
            time ++
            if(time == 200)
            {
                  time = 0
                  S++
            }
            if(S == 60) {
                  M++
                  S = 0
            }
            document.getElementById("stopky44").textContent = `${H}:${M}:${S}:${time}`
      }, 1)
}
function stopTimer() {
      clearInterval(interval)
      interval = null
}
function resetTimer() {
      time = 0
      S = 0
      M = 0
      H = 0
      document.getElementById("stopky44").textContent = "0:0:0:0"
}

/* 45) Simuluj hod kostkou (1–6).
      - Funkce vrací náhodné číslo 1–6.
      - Výsledek vypiš do HTML.
*/

/* 46) Najdi nejčastější hodnotu v poli (moda).
      - Vytvoř funkci, která přijme pole jako parametr.
      - Použij objektový „počítací“ slovník (frequency map).
*/

/* 47) Vytvoř funkci, která formátuje datum do českého formátu
      (DD.MM.YYYY).
      - Funkce dostane objekt Date a vrací string.
*/

/* 48) Zjisti, kolik dní zbývá do konce roku.
      - Spočítej rozdíl mezi dnešním datem a 31.12.
      - Vrátí celé číslo (Math.floor).
*/

/* 49) Vytvoř jednoduchý to-do list:
      - Přidávání úkolů
      - Odstraňování úkolů
      - Každá operace musí být funkce.
*/

/* 50) Ulož a načti data z localStorage (např. skóre nebo jméno).
      - Použij localStorage.setItem a localStorage.getItem.
      - Zobraz načtená data v HTML.
*/
