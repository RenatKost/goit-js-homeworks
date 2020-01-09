'use strict';
import users from "./users.js";
export function task9() {

    const getNamesSortedByFriendsCount = users =>
        users
        .sort(
            (userPrev, userNext) => userPrev.friends.length - userNext.friends.length
        )
        .map(user => user.name);

    console.log(getNamesSortedByFriendsCount(users)); // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

}