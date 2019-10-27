'use strict';
export function task3() {
    function findLongestWord(string) {
        const word = string.split(' ');
        let longestWord = word[0];

        for (const words of word) {
            if (words.length > longestWord.length) {
                longestWord = words
            }
        }
        return longestWord
    }
    console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
}