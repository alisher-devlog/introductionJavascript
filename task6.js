/*Task 6: Kvadratning Perimetri va Yuzini Hisoblash
Tavsif:
Kvadratning tomon uzunligini so'rab, uning perimetri va yuzini hisoblang.
Misol:
Input: 4 (sm) → Perimetri: 16 sm, Yuz: 16 sm²
*/

let square_side = Number(prompt("Kvadtar tomonini kirting:"));

function task6(tomon) {
    if(tomon>0){
        console.log(`Perimetri: ${tomon*4}sm, Yuz: ${tomon**2} sm²`);
    }else{
        console.log("Xatolik");
    }
} 

task6(square_side);