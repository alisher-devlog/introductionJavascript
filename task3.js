/*Tavsif:
Yoshingizni so'rang va shart orqali voyaga yetgan yoki yetmaganligini aniqlang.
Agar yosh 18 dan kichik bo'lsa: "Siz voyaga yetmagansiz."
Aks holda: "Siz voyaga yetgansiz."
Misol:
Input: 16 → "Siz voyaga yetmagansiz."
Input: 20 → "Siz voyaga yetgansiz."
*/

let age = Number(prompt("Iltimos yoshingizni kiriting: "))

function task3(age) {
    if(age >= 0 && age < 18){
        console.log("Siz voyaga yetmagansiz!")
    }else if(age>=18){
        console.log("Siz voyaga yetgansiz!")
    }else{
        console.log("Natog'ri yosh")
    }
} 

task3(age)