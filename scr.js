function myf()
{
    alert("Still the page is not yet ready to use !");
}
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.querySelector('.navbar');

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});