/*Task 10: Internet Tezligini Baholash
Tavsif:
Foydalanuvchi internet tezligini (Mbps) kiritsin va quyidagicha baholash:
< 50 Mbps: "Internet sekin."
50–100 Mbps: "Internet o'rtacha."
100 Mbps: "Internet juda tez."
Misol:
Input: 120 Mbps → "Internet juda tez."
*/

let internet_speed = Number(prompt("Please, enter internet speed (Mbps)"))

function task10(speed) {
    if(speed>=0 && speed<50){
        console.log(`Internet sekin.`)
    }else if(speed>=50 && speed<100){
        console.log(`Internet o'rtacha.`)
    }else if (speed>=100){
        console.log(`Internet juda tez.`)
    }else{
        console.log("Kallavaram tezlik minusdan bo'lmaydi!")
    }
} 

task10(internet_speed)