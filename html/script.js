const shapes = document.querySelectorAll(".shape");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY || document.documentElement.scrollTop;

  shapes.forEach((shape, index) => {
    let scaleFactor = Math.max(0.5, 1 - scrollY / 500); // Adjust shrink effect
    shape.style.transform = `scale(${scaleFactor}) translateY(${scrollY * 0.1}px)`;
    shape.style.opacity = scaleFactor; // Optional: fade effect
  });
});
