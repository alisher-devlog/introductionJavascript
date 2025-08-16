/*Task 8: Temperaturani Celsiusdan Fahrenheitga Aylantirish
Tavsif:
Foydalanuvchi kiritgan Celsius darajasini Fahrenheitga aylantiring.
Aylantirish formulasi: (Celsius * 9/5) + 32
Misol:
Input: 0°C → Kutilgan natija: "0°C = 32°F"
*/

let Celsius = Number(prompt("Celsius kiriting"));

function task8(Fahrenheit) {
    console.log(` Kutilgan natija: ${(Fahrenheit * 9/5) + 32}°F`);
} 
task8(Celsius);