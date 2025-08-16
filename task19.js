/*Task 19: Kiritilgan Qiymatning Data Tipini Aniqlash
Tavsif:
Foydalanuvchi istalgan qiymat kiritsin. Ushbu qiymat raqam (number) yoki matn (string) ekanligini aniqlang.
Misol:
Input: "123" → "Kiritilgan qiymat son"
Input: "hello" → "Kiritilgan qiymat matn"
 */

// bu usulni bitta yomon tomoni agar user 1. kiritsa son deb qabul qilib oladi ekan

let input = prompt("Istalgan narsa kiriting: ");

function task19(input) {
    if(Number(input)  && input.trim() !== "" ) {
        console.log(`Kiritilgan qiymat son`);
    }else{
        console.log((`Kiritilgan qiymat matn`));
    }
    
}
task19(input);