'use strict';
export function task1() {
    const firstArray = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];

    function logItems(array) {
        for (let i = 0; i < array.length; i += 1) {
            console.log(`${array[i]} - ${i + 1}`);
        }
    }

    logItems(firstArray);
}