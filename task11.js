/*Task 11: Dollardan So'mga Konvertatsiya
Tavsif:
Foydalanuvchi kirgan dollar miqdorini so'mga aylantiring. (Faraz qilamiz: 1 dollar = 10650 so'm)
Misol:
Input: 10 dollar → Kutilgan natija: 106500 so'm
 */

let dollar = Number(prompt("$ kiriting borizni janobiy oliylari"))

function task11(sum) {
    if(sum>0){
        console.log(`${sum *10650 } bek sizning puliz shuncha ekan`)
    }else if(sum<0){
        console.log(`Bek minusda ekansiz`)
    }
}

task11(dollar)