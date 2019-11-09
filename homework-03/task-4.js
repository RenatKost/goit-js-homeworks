'use strict';
export function task4() {
    const countTotalSalary = function (employees) {
        let total = 0;

        const count = Object.values(employees);

        for (const value of count) {
            total += value;
        }
        return total;
    };
    console.log(countTotalSalary({})); // 0

    console.log(
        countTotalSalary({
            mango: 100,
            poly: 150,
            alfred: 80,
        }),
    ); // 330
}