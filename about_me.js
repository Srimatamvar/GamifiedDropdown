const editHobbiesButton = document.getElementById("editHobbies");
const hobbiesForm = document.getElementById("hobbiesForm");
const newHobbiesInput = document.getElementById("newHobbies");
const hobbiesDisplay = document.getElementById("hobbies");
const saveHobbiesButton = document.getElementById("saveHobbies");

editHobbiesButton.addEventListener("click", () => {
  hobbiesForm.style.display = "block";
  hobbiesDisplay.style.display = "none";
});

saveHobbiesButton.addEventListener("click", () => {
  const newHobbies = newHobbiesInput.value;
  hobbiesForm.style.display = "none";
  hobbiesDisplay.style.display = "inline";
  hobbiesDisplay.textContent = newHobbies;
});
