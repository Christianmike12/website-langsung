function scrollToSection(id) {
const el = document.getElementById(id);
el.scrollIntoView({ behavior: 'smooth' });
}


document.getElementById('year').textContent = new Date().getFullYear();


document.getElementById('contactForm').addEventListener('submit', (e) => {
e.preventDefault();
alert('Thanks for your message! I will reply soon.');
e.target.reset();
});