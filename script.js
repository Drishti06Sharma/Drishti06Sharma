const texts = document.querySelectorAll(".text");
let index = 0;

setInterval(() => {
  texts[index].classList.remove("active");
  index++;

  if (index < texts.length) {
    texts[index].classList.add("active");
  }
}, 3500);

