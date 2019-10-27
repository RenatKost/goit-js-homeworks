'use strict';
export function task6() {
    let input;
    const numbers = [];
    let total = 0;

    while (true) {
        input = prompt("Введите произвольное число:");
        input = Number(input);
        if (Number(input) && input != 0) {
            numbers.push(Number.parseInt(input));
        } else {
            for (let i = 0; i < numbers.length; i += 1) {
                total += numbers[i];
            }
            alert(`Общая сумма чисел равна - ${total}`);
            break;
        }
    }
}