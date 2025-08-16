/*Task 15: Matn Uzunligini Hisoblash
Tavsif:
Foydalanuvchi kiritgan matnning belgilar sonini aniqlang.
Misol:
Input: "Hello" → Natija: 5 ta belgi
 */
let matn = prompt("Matn kriting men sizga uzunligini aytib beraman")

function task15(text) {
    console.log(` Natija: ${text.length} ta belgi `)
}
task15(matn)