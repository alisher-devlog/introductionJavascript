/*Task 7: Kubning Hajmini Hisoblash
Tavsif:
Kubning bitta tomonining uzunligi asosida uning hajmini hisoblang.
Misol:
Input: 3 (sm) → Hajm: 27 sm³
*/

let cube_side = Number(prompt("Kubni tomonni kiriting: "))

function task7(tomon) {
    if(tomon>0){
        console.log(`Hajm: ${tomon**3} sm³`)
    }else{
        console.log("Xatolik")
    }
} 

task7(cube_side)