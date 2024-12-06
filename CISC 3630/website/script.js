const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.content-section');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const sectionToShow = link.getAttribute('data-section');
    
    sections.forEach(section => section.style.display = 'none');
    
    document.getElementById(`${sectionToShow}-section`).style.display = 'block';

    navLinks.forEach(nav => nav.classList.remove('active'));
    link.classList.add('active');
  });
});
