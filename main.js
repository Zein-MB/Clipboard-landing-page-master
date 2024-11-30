const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  })
})

let hiddenEls = document.querySelectorAll(".hidden");
hiddenEls.forEach(el => {
  observer.observe(el);
})

let goUpBtn = document.querySelector(".goup-button");

window.addEventListener("load", () => {
  if (window.scrollY < 700) {
    goUpBtn.classList.add("inactive")
  }
})

window.addEventListener("scroll", () => {
  if (window.scrollY >= 700) {
    goUpBtn.classList.remove("inactive")
  } else {
    goUpBtn.classList.add("inactive")
  }
})

goUpBtn.addEventListener("click", () => {
  window.scrollTo(0, 0)
})