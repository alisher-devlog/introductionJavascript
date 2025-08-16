/*Task 14: Ikkita Sonni Taqqoslash
Tavsif:
Foydalanuvchi ikkita son kiritsin. Qaysi biri katta yoki ularning tengligini aniqlang.
Misol:
Input: 10 va 20 → "20 katta 10 dan."
Agar teng bo'lsa, "Ikkala son teng." deb yozilsin.
*/

let number1 = Number(prompt("Son1 ni kiriting:"))
let number2 = Number(prompt("Son2 ni kiriting:"))

function task14() {
    if(number1>number2){
        console.log(`${number1} katta ${number2} dan`)
    }else if(number1<number2){
        console.log(`${number2} katta ${number1} dan`)
    }else{
        console.log("Ikkala son teng.")
    }
} 
task14(number1,number2)