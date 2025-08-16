/* Tavsif:
Foydalanuvchi 0-100 oralig'ida imtihon ballini kiritsin va quyidagi mezonlarga asosan baho chiqaring:
90–100: A
80–89: B
70–79: C
60–69: D
Past: F
Misol:
Input: 85 → "B"
*/

let mark = Number(prompt("0 va 100 oralig'ida ball kiriting!"));

function task5(mark) {
    if(0<=mark && mark<60){
        console.log("F");
    }else if(mark>=60 && mark<70){
        console.log(`D`);
    }else if(mark>=70 && mark<80){
        console.log(`C`);
    }else if(mark>=80 && mark<90){
        console.log(`B`);
    }else if(mark>=90 && mark<=100){
        console.log(`A`);
    }else{
        console.log(`Siz natog'ri baxo kiritdingiz`);
    }
} 

task5(mark);