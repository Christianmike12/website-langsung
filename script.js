function scrollToSection(id) {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: "smooth" });
}

const sections = document.querySelectorAll(".section");
window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    const position = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    if (position < screenPosition) {
      section.classList.add("visible");
    }
  });
});
