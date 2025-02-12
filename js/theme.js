function toggleTheme() {
    const html = document.documentElement;
    const themeToggleIcon = document.querySelector('.theme-toggle-icon');
    
    if (html.getAttribute('data-theme') === 'light') {
        html.setAttribute('data-theme', 'dark');
        themeToggleIcon.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        html.setAttribute('data-theme', 'light');
        themeToggleIcon.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
}

// Проверяем сохраненную тему при загрузке
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const themeToggleIcon = document.querySelector('.theme-toggle-icon');
    
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggleIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
    
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
}); 