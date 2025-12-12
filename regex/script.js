/* -----------------------------------------------------------
 * Úloha 70: Validace e-mailu
 * Napiš regulární výraz pro validaci e-mailové adresy.
 * Implementuj funkci validateEmail(email), která vrátí true/false
 * podle toho, zda je e-mail validní.
 *
 * Procvičuje: základní regex, escapování teček, testování pomocí test()
 * ----------------------------------------------------------- */

function validateEmail(email) {
    const regex = /([\w+-]\.?)+@+[a-z.-]+\.[a-zA-z]{2,}/g;
    return regex.test(email);
}


/* -----------------------------------------------------------
 * Úloha 71: Hledání čísel v textu
 * Vytvoř regulární výraz, který najde všechna čísla v textu.
 * Implementuj funkci findNumbers(text), která vrátí pole čísel.
 *
 * Procvičuje: kvantifikátory +, globální modifikátor g, match()
 * ----------------------------------------------------------- */

function findNumbers(text) {
    const regex = /\d+/g;
    return text.match(regex);
}


/* -----------------------------------------------------------
 * Úloha 72: Formátování data
 * Napiš regex, který zachytí datum ve formátu DD.MM.YYYY a převede
 * ho pomocí replace() na formát YYYY-MM-DD.
 *
 * Procvičuje: skupiny (), backreference $1-$3, replace()
 * ----------------------------------------------------------- */

function formatDate(date) {
    const regex = /[1-3]*[0-9].[0-1]*[1-9].\d{4}/;
    return date.match(regex);
}


/* -----------------------------------------------------------
 * Úloha 73: Validace hesla
 * Napiš regex, který ověří, že heslo obsahuje:
 * - min. 8 znaků
 * - velké písmeno
 * - malé písmeno
 * - číslici
 * - speciální znak
 *
 * Procvičuje: lookaheads, kombinace skupin, komplexní validace
 * ----------------------------------------------------------- */

function validatePassword(password) {
    const regex = /tvůj_regex_zde/;
    return regex.test(password);
}


/* -----------------------------------------------------------
 * Úloha 74: Extrakce HTML tagů
 * Pomocí regexu vyber všechny HTML tagy včetně jejich obsahu.
 * Implementuj funkci extractTags(html), která vrátí pole tagů.
 *
 * Procvičuje: nežravé kvantifikátory *?, globální match
 * ----------------------------------------------------------- */

function extractTags(html) {
    const regex = /tvůj_regex_zde/g;
    return html.match(regex);
}


/* -----------------------------------------------------------
 * Úloha 75: Čištění textu
 * Vytvoř dva regexy:
 * 1. pro nahrazení vícenásobných mezer jednou
 * 2. pro odstranění speciálních znaků
 *
 * Implementuj funkci cleanText(text).
 *
 * Procvičuje: skupiny znaků [], řetězení replace()
 * ----------------------------------------------------------- */

function cleanText(text) {
    const regex1 = /tvůj_regex_pro_mezery/;
    const regex2 = /tvůj_regex_pro_spec_znaky/;
    return text.replace(regex1, ' ').replace(regex2, '');
}


/* -----------------------------------------------------------
 * Úloha 76: Parsování CSV
 * Pomocí regexu rozparsuj CSV s hodnotami v uvozovkách.
 * Cílem je vrátit strukturovaná data.
 *
 * Procvičuje: matchování textu s ohledem na uvozovky, skupiny (), g
 * ----------------------------------------------------------- */

function parseCSV(csvText) {
    const regex = /tvůj_regex_zde/g;
    // Zpracuj řádky CSV s ohledem na uvozovky
}


/* -----------------------------------------------------------
 * Úloha 77: Validace kreditní karty
 * Napiš regex pro validaci čísel kreditních karet (Visa, MasterCard).
 * Ignoruj mezery ve vstupu.
 *
 * Procvičuje: alternativy, různé délky, escapování mezer
 * ----------------------------------------------------------- */

function validateCreditCard(cardNumber) {
    const regex = /tvůj_regex_zde/;
    return regex.test(cardNumber.replace(/\s/g, ''));
}


/* -----------------------------------------------------------
 * Úloha 78: Minifikace CSS
 * Implementuj funkci minifyCSS(css), která:
 * 1. odstraní CSS komentáře
 * 2. odstraní zbytečné mezery
 *
 * Procvičuje: použití regexu pro odstranění bloků, whitespace cleanup
 * ----------------------------------------------------------- */

function minifyCSS(css) {
    const regex1 = /\/\*[\s\S]*?\*\//g; // komentáře
    const regex2 = /tvůj_regex_pro_mezery/g;
    return css.replace(regex1, '').replace(regex2, ' ');
}


/* -----------------------------------------------------------
 * Úloha 79: Analyzátor logů
 * Pomocí regexu extrahuj logy ve formátu:
 * [TIMESTAMP] LEVEL: MESSAGE
 *
 * Cílem je získat timestamp, úroveň a zprávu.
 *
 * Procvičuje: skupiny (), kapturní skupiny, match()
 * ----------------------------------------------------------- */

function parseLogs(logText) {
    const regex = /tvůj_regex_zde/;
    return logText.match(regex);
}


/* -----------------------------------------------------------
 * Úloha 80: Jednoduchý template engine
 * Napiš regex, který najde {{promenne}} a nahradí je hodnotami
 * z objektu data.
 *
 * Procvičuje: zachytávací skupiny, callback v replace()
 * ----------------------------------------------------------- */

function renderTemplate(template, data) {
    const regex = /tvůj_regex_zde/g;
    return template.replace(regex, (match, key) => data[key] || '');
}


/* -----------------------------------------------------------
 * Úloha 81: Validace českého telefonního čísla
 * Podporované formáty:
 * - +420 123 456 789
 * - 123 456 789
 * - 604123456
 *
 * Procvičuje: nepovinný prefix, alternativy, čištění whitespace
 * ----------------------------------------------------------- */

function validateCzechPhone(phone) {
    const regex = /tvůj_regex_zde/;
    return regex.test(phone.replace(/\s/g, ''));
}


/* -----------------------------------------------------------
 * Úloha 82: Rozdělení camelCase na slova
 * Napiš regex, který rozdělí camelCase text na slova.
 * Např. "camelCaseText" → "camel Case Text"
 *
 * Procvičuje: lookahead/lookbehind nebo skupiny, replace()
 * ----------------------------------------------------------- */

function camelCaseToWords(camelCase) {
    const regex = /[A-Z]*([a-z]*)/g;
    return camelCase.replace(regex, ' $1').trim();
}


// TEST
console.log(validateEmail("test@email.cz"))
console.log(findNumbers("Mám 3 jablka a 15 hrušek 16"));
console.log(formatDate("25.12.2023 is a year and 10.100.000 is not. 20.02.1000"));
console.log(validatePassword("SilnéHeslo123!"));
console.log(extractTags('<div>Test</div><p>Ahoj</p>'));
console.log(cleanText("  Příliš    žluťoučký  kůň!  "));
console.log(validateCreditCard("4111 1111 1111 1111"));
console.log(minifyCSS("body { color: red; }"));
console.log(parseLogs(`[2023-01-01 10:00:00] INFO: Start`));
console.log(renderTemplate("Ahoj {{name}}", { name: "Petr" }));
console.log(validateCzechPhone("+420 604 123 456"));
console.log(camelCaseToWords("camelCaseText"));