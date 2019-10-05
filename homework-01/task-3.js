const ADMIN_PASSWORD = 'qwerty';
let message;
message = prompt("Введите пароль!")
if (message === null) {
    alert("Отменено пользователем!");

} else if (message === ADMIN_PASSWORD) {
    alert("Добро пожаловать!");

} else if (message !== ADMIN_PASSWORD) {
    alert("Доступ запрещен, неверный пароль!");

}
alert(message);