'use strict';
import users from "./users.js";
export function task7() {

    const calculateTotalBalance = users =>
        users.reduce((sumBalance, user) => sumBalance + user.balance, 0);
    console.log(calculateTotalBalance(users)); // 20916

}