'use strict';
import users from "./users.js";
export function task4() {

    const getInactiveUsers = users => users.filter(user => !user.isActive);
    console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

}