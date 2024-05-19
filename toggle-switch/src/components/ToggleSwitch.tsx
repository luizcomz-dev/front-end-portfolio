import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { Theme } from '../styles/Themes';

const StyledLabel = styled.label<{ checked: boolean; theme: Theme, disabled: boolean; }>`
    cursor: pointer;
    text-indent: -9999px;
    width: 90px;
    height: 46px;
    background: ${({ theme }) => theme.colors.background};
    display: block;
    border-radius: 25px;
    position: relative;
    transition: all 0.3s ease;

    &:after {
        content: '';
        position: absolute;
        left: ${({ checked }) => checked ? 'calc(55% - 5px)' : '5px'};
        top: 3px;
        width: 35px;
        height: 35px;
        background: ${({ theme, checked, disabled }) => {
        if (disabled)
            return theme.colors.background;

        return checked ? theme.colors.primary : theme.colors.secondary;
    }};
        
        border-radius: 50%;
        transition: all 0.3s ease;
    }

    &, &:after {
        border: 2px solid ${({ theme, checked, disabled }) => {
        if (disabled)
            return theme.colors.secondary;

        return checked ? theme.colors.primary : theme.colors.secondary;
    }};
    }

    &[disabled] {
        cursor: not-allowed;
        opacity: 0.5;
        pointer-events: none;
    }
`;

const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    flex-direction: column;
    margin: 2rem 0;
`;

const StyledRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
`;

export default function ToggleSwitch() {
    const [checked, setChecked] = useState(false);

    function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
        setChecked(e.target.checked);
    }

    return (
        <StyledWrapper>
            <StyledRow>
                <h2>Enabled</h2>
                <StyledLabel htmlFor='checkbox' checked={checked} disabled={false}>
                    <input
                        id='checkbox'
                        type='checkbox'
                        checked={checked}
                        onChange={handleOnChange}
                        disabled={false}
                    />
                </StyledLabel>
            </StyledRow>

            <StyledRow>
                <h2>Disabled</h2>
                <StyledLabel htmlFor='checkbox' checked={checked} disabled={true}>
                    <input
                        id='checkboxDisabled'
                        type='checkbox'
                        checked={checked}
                        onChange={handleOnChange}
                        disabled={true}
                    />
                </StyledLabel>
            </StyledRow>
        </StyledWrapper>
    );
}