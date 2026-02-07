let current = 0;
const screens = document.querySelectorAll(".screen");

function nextScreen() {
  screens[current].classList.remove("active");
  current++;
  if (current < screens.length) {
    screens[current].classList.add("active");
  }
}
