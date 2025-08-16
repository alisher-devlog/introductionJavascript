/*ask 18: Sodda Foiz Hisoblash (Bank Foizi)
Tavsif:
Foydalanuvchi asosiy summani, yillik foiz stavkasini (foizda) va vaqtni (yil) kiritsin.
Sodda foiz formulasi: (asosiy summa * foiz stavkasi * yil) / 100
Misol:
Input: 100000 so'm, 10%, 2 yil → Natija: 20000 so'm
*/

let summa = Number(prompt("Summani kiriting: "));
let foiz = Number(prompt("Foizni kiriting: "));
let vaqt = Number(prompt("Necha Yilga kiriting: "));


function task18(asosiySumma,foizStavkasi,yil) {
    if(summa>0 && (foiz>=0 && foiz<=100) && vaqt>=0 ){
    console.log(`Natija: ${(asosiySumma * foizStavkasi * yil) / 100}`);
    }
} 

task18(summa,foiz,vaqt);