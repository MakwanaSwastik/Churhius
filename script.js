// Get the button
const backToTopBtn = document.querySelector(".backToTop");

//Listens for the scroll event and shows the button when the user scrolls down by more than 20 pixels.
window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

// When the button is clicked, it smoothly scrolls the page back to the top.
backToTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

document.getElementById('mobile-toggler').addEventListener('click', function () {
  document.getElementById('mobileNav').classList.toggle('show');
});

document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => item.classList.toggle('open'));
});