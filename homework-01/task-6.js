let input;
let total = 0;

while (true) {
    input = prompt(`Вводите числа которые хотите сумировать. Для результата нажмите "Cancel"`);

    if (input === null) {
        alert(`Общая сумма чисел равна ${total}`);
        break;
    }
    input = Number(input);

    total = total + input;
}