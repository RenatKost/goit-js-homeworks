const refs = {
    userInput: document.querySelector("#name-input"),
    output: document.querySelector("#name-output")
};

refs.userInput.addEventListener("input", () => {
    refs.output.textContent = refs.userInput.value || "незнакомец";
});