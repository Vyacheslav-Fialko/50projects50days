const container = document.querySelector(".container");
const over = (e) => {
  const elem = e.target.closest(".split");
  if (elem.classList.contains("left")) {
    container.classList.add("hover-left");
    return true;
  }
  if (elem.classList.contains("right")) {
    container.classList.add("hover-right");
    return true;
  }
  return false;
};

const out = (e) => {
  const elem = e.target.closest(".split");
  if (elem.classList.contains("left")) {
    container.classList.remove("hover-left");
    return true;
  }
  if (elem.classList.contains("right")) {
    container.classList.remove("hover-right");
    return true;
  }
  return false;
};

container.addEventListener("mouseover", over);
container.addEventListener("mouseout", out);
