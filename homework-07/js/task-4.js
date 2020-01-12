const value = document.querySelector("#value");
let counter = 0;
const decrementBtn = document.querySelector("[data-action = decrement]");
const incrementBtn = document.querySelector("[data-action = increment]");

const counterEdit = () => (value.textContent = counter);

const handleClickPlus = () => {
    counter += 1;
    counterEdit();
};

const handleClickMinus = () => {
    counter -= 1;
    counterEdit();
};

incrementBtn.addEventListener("click", handleClickPlus);
decrementBtn.addEventListener("click", handleClickMinus);