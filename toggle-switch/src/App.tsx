import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import ToggleSwitch from './components/ToggleSwitch';
import { darkTheme, lightTheme } from './styles/Themes';
import { GlobalStyles } from './styles/globalStyles';

function App() {
  const [theme, setTheme] = useState('light');
  const isDark = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />

      <h1>Toggle Switch</h1>
      
      <button onClick={toggleTheme}>
        {isDark ? 'Light Mode' : 'Dark Mode'}
      </button>

      <ToggleSwitch />
    </ThemeProvider>
  )
}

export default App
