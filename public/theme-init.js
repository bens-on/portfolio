(function() {
  try {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    const root = document.documentElement;
    if (theme === 'dark') {
      root.style.setProperty('--background', '#0a0a0a');
      root.style.setProperty('--foreground', '#ededed');
      root.classList.add('dark');
    } else {
      root.style.setProperty('--background', '#ffffff');
      root.style.setProperty('--foreground', '#171717');
      root.classList.remove('dark');
    }
  } catch (e) {
    // Fallback to dark theme if localStorage is not available
    const root = document.documentElement;
    root.style.setProperty('--background', '#0a0a0a');
    root.style.setProperty('--foreground', '#ededed');
    root.classList.add('dark');
  }
})();



