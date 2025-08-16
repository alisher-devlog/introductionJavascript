/*Task 12: Haydovchilik Ruxsatini Tekshirish
Tavsif:
Foydalanuvchidan yoshini va avtomobil turini (masalan, "yengil" yoki "yuk") so'rang.
Agar yosh 18+ va avtomobil turi "yengil" bo'lsa, "Siz yengil avtomobil boshqarishingiz mumkin."
Aks holda, tegishli qo'shimcha xabarni chiqarilsin.
Misol:
Input: yosh = 20, tur = "yengil" → "Siz yengil avtomobil boshqarishingiz mumkin."
 */

let age = Number(prompt(`Yoshingiz necha bek: `));
let carType = prompt("Bu toychoq yengil avtomabilmi yoki yuk moshinami");

function task12(ageLimit, carType) {
    if(ageLimit<0){
        console.log("Akayiz emasman bek!");
    }else{
        if((ageLimit>0 && ageLimit<18) && (carType.toLowerCase() === 'yengil' || carType.toLowerCase() === 'yuk')){
            console.log(`Buni sizga minish mumkin emas, 100$ bilan lekin hal qilamiz!`);
        }else if(ageLimit>=18 && (carType.toLowerCase() == 'yengil' || carType.toLowerCase() == 'yuk')){
            console.log(`Siz ${carType} avtomobil boshqarishingiz mumkin."`);
        }else{
            console.log("Xatolik");
        }
    }
}
task12(age,carType);