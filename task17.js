/*ask 17: Uchta Sonning O'rtacha Qiymatini Hisoblash
Tavsif:
Foydalanuvchi uchta son kiritsin va ularning o'rtacha qiymatini hisoblang.

Misol:

Input: 3, 4, 5 → O'rtacha: 4
 */

let number1 = Number(prompt("Son1 kiriting: "));
let number2 = Number(prompt("Son2 kiriting: "));
let number3 = Number(prompt("Son3 kiriting: "));

function task17(number1,number2,number3) {
    console.log(`O'rtacha: ${(number1+number2+number3)/3}`);
}
task17(number1,number2,number3);