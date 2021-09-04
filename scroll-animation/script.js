const checkBoxes = () => {
  const triggerBottom = (window.innerHeight / 5) * 4.5;
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    boxTop < triggerBottom
      ? box.classList.add("show")
      : box.classList.remove("show");
  });
};
window.onload = () => checkBoxes();
window.addEventListener("scroll", checkBoxes);
