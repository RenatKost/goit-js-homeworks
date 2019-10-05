const credits = 23580;
const pricePerDroid = 3000;
let amountDroid;
let totalPrice;
amountDroid = prompt("Сколько дронов вы хотите купить?")
if (amountDroid === null) {
    alert("Отменено пользователем!");
} else if (amountDroid !== null) {
    totalPrice = Number(amountDroid) * pricePerDroid;
}
if (totalPrice > credits) {
    alert("Недостаточно средств на счету!");
} else if (totalPrice <= credits) {
    alert(`Вы купили ${amountDroid} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
}