const validInput = document.querySelector("#validation-input");
// console.dir(validInput);

validInput.addEventListener("blur", e => {
  const length = Number(validInput.dataset.length);

  if (e.currentTarget.value.length === length) {
    e.currentTarget.classList.remove("invalid");
    e.currentTarget.classList.add("valid");
  } else {
    e.currentTarget.classList.remove("valid");
    e.currentTarget.classList.add("invalid");
  }
});