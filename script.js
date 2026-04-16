const items = document.querySelectorAll('.fade-in, .text-reveal');

const observer = new IntersectionObserver(entries => {
entries.forEach((entry, index) => {
if(entry.isIntersecting){
setTimeout(() => {
entry.target.classList.add('show');
}, index * 150);
}
});
});

items.forEach(el => observer.observe(el));



// menu bar start 
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

let open = false;

menuBtn.addEventListener("click", () => {
  open = !open;

  if (open) {
    mobileMenu.style.maxHeight = "400px";
  } else {
    mobileMenu.style.maxHeight = "0px";
  }
});

// menu bar end