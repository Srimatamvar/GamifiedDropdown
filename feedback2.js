const stars = document.querySelectorAll(".star");
const feedbackText = document.getElementById("feedbackText");
const submitBtn = document.getElementById("submitBtn");

let selectedRating = 0;

stars.forEach((star) => {
  star.addEventListener("click", () => {
    selectedRating = parseInt(star.getAttribute("data-rating"));
    updateStars();
  });
});

function updateStars() {
  stars.forEach((star) => {
    const starRating = parseInt(star.getAttribute("data-rating"));
    if (starRating <= selectedRating) {
      star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
  });
}

submitBtn.addEventListener("click", () => {
  const feedback = feedbackText.value;

  // You can send the feedback and rating to your server or perform other actions here

  alert(
    `Thank you for your feedback!\nRating: ${selectedRating}\nFeedback: ${feedback}`
  );

  // Reset the form
  selectedRating = 0;
  feedbackText.value = "";
  updateStars();
});
