/*Tavsif:
Foydalanuvchidan ismi va familiyasini so'rang va ularni bitta satrga birlashtiring.

Misol:

Input: "Ali", "Valiyev"
Kutilgan natija: "Ali Valiyev" */

let firstName = prompt("Ismingizni kiriting:")
let lastName = prompt("Familyangizni kiriting:")

function task2(firstName,lastName) {
    return `${firstName} ${lastName}`;
}
console.log(task2(firstName,lastName))