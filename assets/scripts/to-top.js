// Show the back-to-top button once the hero is out of view.
const toTop = document.querySelector(".to-top");
const hero = document.querySelector(".hero");

if (toTop && hero && "IntersectionObserver" in window) {
  new IntersectionObserver(([entry]) => {
    toTop.classList.toggle("is-visible", !entry.isIntersecting);
  }).observe(hero);
} else if (toTop) {
  toTop.classList.add("is-visible");
}
