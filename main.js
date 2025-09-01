const faqs = document.querySelectorAll(".faq");
faqs.forEach( faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
});

window.addEventListener("scroll", function () {
  const header = document.querySelector("nav");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

