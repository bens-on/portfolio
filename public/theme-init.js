(function() {
  try {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');

    const root = document.documentElement;
    if (theme === 'dark') {
      root.style.setProperty('--background', '#07060f');
      root.style.setProperty('--foreground', '#f2f0f8');
      root.classList.add('dark');
    } else {
      root.style.setProperty('--background', '#f4f1fb');
      root.style.setProperty('--foreground', '#1a1528');
      root.classList.remove('dark');
    }
  } catch (e) {
    const root = document.documentElement;
    root.style.setProperty('--background', '#07060f');
    root.style.setProperty('--foreground', '#f2f0f8');
    root.classList.add('dark');
  }
})();
