'use strict';
import users from "./users.js";
export function task10() {

    const getSortedUniqueSkills = users =>
        users
        .reduce((acc, {
            skills
        }) => [...acc, ...skills], [])
        .filter((skill, index, skills) => skills.indexOf(skill) === index)
        .sort();

    console.log(getSortedUniqueSkills(users));
    // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lore']

}