import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import ToggleSwitch from './components/ToggleSwitch';
import { Theme, darkTheme, lightTheme } from './styles/Themes';
import { GlobalStyles } from './styles/globalStyles';
import { SwitchThemeButton } from './components/SwithThemeButton';

const StyledHeader = styled.header<{ theme: Theme }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
`;


function App() {
  const [theme, setTheme] = useState('light');
  const isDark = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />

      <StyledHeader>
        <h1>Toggle Switcher</h1>

        <SwitchThemeButton isDark={isDark} toggleTheme={toggleTheme} />
      </StyledHeader>

      <ToggleSwitch />

    </ThemeProvider>
  );
}

export default App;
