const lines = document.querySelectorAll(".shayari p");

lines.forEach((line, index) => {
  setTimeout(() => {
    line.style.opacity = 1;
    line.style.transition = "opacity 1.5s ease";
  }, index * 1400);
});
