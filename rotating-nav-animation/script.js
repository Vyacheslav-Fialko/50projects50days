const circle = document.querySelector(".circle");

circle.addEventListener("click", () =>
  circle.closest(".container").classList.toggle("show-nav")
);
