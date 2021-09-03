const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
const circlesCount = circles.length;
const lastCirrclesIndex = circlesCount - 1;

let currentActive = 0;

next.addEventListener("click", () => {
  currentActive++;
  currentActive > lastCirrclesIndex
    ? (currentActive = lastCirrclesIndex)
    : update();
});

prev.addEventListener("click", () => {
  currentActive--;
  currentActive < 0 ? (currentActive = 0) : update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx <= currentActive) {
      if (!circle.classList.contains("active")) {
        circle.classList.add("active");
      }
    } else {
      if (circle.classList.contains("active")) {
        circle.classList.remove("active");
      }
    }
  });

  const activesLastIndex = document.querySelectorAll(".active").length - 1;
  const progressWidth = (activesLastIndex / lastCirrclesIndex) * 100;
  progress.style.width = `${progressWidth}%`;

  if (currentActive === 0) {
    prev.disabled = true;
  } else if (currentActive === lastCirrclesIndex) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
