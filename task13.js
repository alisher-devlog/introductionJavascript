/*Task 13: Maoshni Hisoblash
Tavsif:
Foydalanuvchidan ishga ketgan soatlar soni va soatlik ish haqini so'rab, umumiy maoshni hisoblang.
Misol:
Input: 40 soat, 15 so'm/soat → Natija: 600 so'm
 */

let workTime = Number(prompt("Ishlagan soatiz"));
let timeSolary = Number(prompt("Soatlik moash"));

function task13(ishVaqti, vaqtNarxi) {
    if(ishVaqti>0 && vaqtNarxi>0){
        console.log(` Natija: ${ishVaqti*vaqtNarxi}`);
    }else{
        console.log("Xatolik");
    }
    
}
task13(workTime,timeSolary);

