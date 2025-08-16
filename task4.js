/*Tavsif:
Foydalanuvchi kiritgan sonning toq yoki juft ekanligini aniqlang.
Misol:
Input: 8 → "Kiritilgan son juft."
Input: 3 → "Kiritilgan son toq."
*/

let son = Number(prompt("Son kiriting: "))

function task4(son) {
    if(son%2){
        console.log("Bu son toq son!")
    }else{
        console.log(`Bu son juft son`)
    }
} 
task4(son)