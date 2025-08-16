/*Task 9: Havoning Namligini Baholash
Tavsif:
Foydalanuvchi havoning namlik foizini kiritsin va quyidagicha baholash:
< 30%: "Havo juda quruq."
30–60%: "Havo qulay."
60%: "Havo nam."
Misol:
Input: 25 → "Havo juda quruq."
*/

let wet = Number(prompt("Havoning Namligini kirting"))


function task9(namlikFoizi) {
    if(namlikFoizi>=0 && namlikFoizi<30){
        console.log('Havo juda quruq.')
    }else if(namlikFoizi>=30 && namlikFoizi<60){
        console.log('Havo qulay.')
    }else if(namlikFoizi>=60 && namlikFoizi<=100){
        console.log('Havo nam.')
    }else {
        console.log('Xatolik boshqa foiz ko`rsatkichini kirting.')
    }
} 

task9(wet)