const button = document.getElementById('themeToggle');

function updateTheme() {
  if (button) {
    if (document.body.classList.contains('dark')) {
      button.textContent = 'Светлая тема';
    } else {
      button.textContent = 'Тёмная тема';
    }
  }
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark');
  updateTheme();
}

if (button) {
  button.onclick = function() {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
    updateTheme();
  };
}