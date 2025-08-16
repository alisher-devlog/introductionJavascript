/*Tavsif:
Foydalanuvchi uchta son kiritsin va ulardan eng kattasini aniqlang.

Misol:

Input: 7, 15, 10 → Natija: "Eng katta son: 15"
 */

let number1 = Number(prompt("son1 kiriting:"));
let number2 = Number(prompt("son2 kiriting:"));
let number3 = Number(prompt("son3 kiriting:"));

function task20(number1,number2,number3) {
    let max = number1;
    if(max<number2){
        max=number2;
    }
    if(number3>max){
        max=number3;
    }
    console.log(max)
}

task20(number1,number2,number3);