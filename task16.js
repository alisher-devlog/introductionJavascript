/**
 Task 16: Xarid Summasiga Diskont Qo'llash
Tavsif:
Foydalanuvchi xarid summasini kiritsin. Agar summa 500,000 so'mdan yuqori bo'lsa, 10% chegirma qo'llansin va chegirma miqdori bilan to'lov aniq belgilansin.
Aks holda, chegirma qo'llanmasin.
Misol:
Input: 600000 so'm → Chegirma: 60000 so'm, To'lov: 540000 so'm
 */

let summa = Number(prompt("Xarid Summasini kiriting:"))
function task16(summa) {
    if(summa>0){
        if(summa>=500000){
            console.log(`Chegirma: ${summa/10} so'm, To'lov: ${summa - summa/10}  so'm`)
        }else{
            console.log(` To'lov: ${summa} so'm`)
        }
    }else{
        console.log("narsa olmabsiz!")
    }
}

task16(summa)