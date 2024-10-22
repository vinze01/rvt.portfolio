import { ref } from 'vue';

export const useTheme = () => {
  const isDarkMode = ref(localStorage.getItem('darkMode') === 'true');

  const toggleTheme = (checked: boolean) => {
    isDarkMode.value = checked;
    localStorage.setItem('darkMode', String(checked));
    document.body.className = checked ? 'dark-mode' : '';
  };

  return { isDarkMode, toggleTheme };
};
