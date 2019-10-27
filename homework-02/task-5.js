'use strict';
export function task5() {
    function checkForSpam(str) {
        const string = str.toLowerCase();
        if (string.includes('sale') || string.includes('spam')) {
            return true
        } else {
            return false
        }

    }
    console.log(checkForSpam('JavaScript weekly newsletter')); // false

    console.log(checkForSpam('Get best sale offers now!')); // true

    console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
}