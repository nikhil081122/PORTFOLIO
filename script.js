// Function for circular progress bars
function animateProgress(selector, endValue, color) {
  let progressElement = document.querySelector(selector),
      progressValue = progressElement.querySelector(".progress-value");
  
  let startValue = 0;
  const updateProgress = () => {
    if (startValue <= endValue) {
      progressValue.textContent = `${startValue}%`;
      progressElement.style.background = `conic-gradient(${color} ${startValue * 3.6}deg, #ededed 0deg)`;
      startValue++;
      requestAnimationFrame(updateProgress);
    }
  };
  requestAnimationFrame(updateProgress);
}

// Initialize progress bars
animateProgress(".html-css", 90, "#fca61f");
animateProgress(".javascript", 75, "#7d2ae8");
animateProgress(".php", 80, "#20c997");
animateProgress(".reactjs", 30, "#3f396d");

// Filter function using pure JavaScript
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".filter-item").forEach(item => {
    item.addEventListener("click", function () {
      let filterValue = this.getAttribute("data-filter");
      document.querySelectorAll(".post").forEach(post => {
        if (filterValue === "all" || post.classList.contains(filterValue)) {
          post.style.display = "block";
        } else {
          post.style.display = "none";
        }
      });
    });
  });
});

// Sticky Navbar
window.addEventListener("scroll", function () {
  let navbar = document.getElementById("navbar-top");
  let navbarHeight = navbar.offsetHeight;
  
  if (window.scrollY > 50) {
    navbar.classList.add("fixed-top");
    document.body.style.paddingTop = navbarHeight + "px";
  } else {
    navbar.classList.remove("fixed-top");
    document.body.style.paddingTop = "0";
  }
});

// Back to top button
let backToTopBtn = document.getElementById("btn-back-to-top");
window.addEventListener("scroll", function () {
  backToTopBtn.style.display = window.scrollY > 20 ? "block" : "none";
});
backToTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
document.querySelector(".link").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default jump
  document.querySelector("#work-section").scrollIntoView({
    behavior: "smooth"
  });
});
