const body = document.body;
const button = document.getElementById('themeToggle');

// Açılışta dark mode aktif olsun
body.classList.add('dark');
button.textContent = '☀️ Light Mode';

// Butona tıklanınca tema değiştir
button.addEventListener('click', () => {
    body.classList.toggle('dark');
    button.textContent = body.classList.contains('dark') ? '☀️ Light Mode' : '🌙 Dark Mode';
});