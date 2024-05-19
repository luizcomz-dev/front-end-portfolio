
import { styled } from 'styled-components';
import { Theme } from '../styles/Themes';

import { LuMoon, LuSun } from "react-icons/lu";

interface SwitchThemeButtonProps {
    isDark: boolean;
    toggleTheme: () => void;
}

const StyledButton = styled.button<{ theme: Theme; }>`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 50%;
    
    svg {
        width: 20px;
        height: 20px;
    }

    &:hover {
        color: ${({ theme }) => theme.colors.secondary};
    }
`;

export const SwitchThemeButton = ({
    isDark,
    toggleTheme
}: SwitchThemeButtonProps) => {
    return (
        <StyledButton onClick={toggleTheme}>
            {isDark 
                ? <LuMoon />
                : <LuSun />
            }
        </StyledButton>
    );
};
