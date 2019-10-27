'use strict';
export function task4() {
    const formatString = function (string) {
        if (string.length > 39) {
            return `${string.slice(0, 39)}...`;
        } else {
            return string;
        }
    }
    console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
    // вернется оригинальная строка

    console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
    // вернется форматированная строка
}