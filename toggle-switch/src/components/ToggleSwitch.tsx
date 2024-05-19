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
    border: 3px solid ${({ theme, checked, disabled }) => {
        if (disabled)
            return theme.colors.secondary;

        return checked ? theme.colors.primary : theme.colors.secondary;
    }};

    &:after {
        content: '';
        position: absolute;
        left: ${({ checked }) => checked ? 'calc(55% - 5px)' : '5px'};
        top: 3px;
        width: 40px;
        height: 40px;
        background: ${({ theme, checked, disabled }) => {
            if (disabled)
                return theme.colors.background;

            return checked ? theme.colors.primary : theme.colors.secondary;
        }};
        border: ${({ disabled, theme }) => disabled ? '2px solid ' + theme.colors.secondary : 'none'};
        border-radius: 50%;
        transition: all 0.3s ease;
    }
`;

const StyledWrapper = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    gap: 10px;
    flex-direction: column;
    margin: 2rem 0;
`;

export default function ToggleSwitch() {
    const [checked, setChecked] = useState(false);
    const [disabled, setDisabled] = useState(true);

    function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
        setChecked(e.target.checked);
    }

    function handleOnDisabled(e: ChangeEvent<HTMLInputElement>) {
        setDisabled(e.target.checked);
    }

    return (
        <StyledWrapper>
            <label>
                <input type="checkbox" name="" onChange={handleOnDisabled} value="Disabled" id="" />
                <span>Disabled</span>
            </label>

            <StyledLabel htmlFor='checkbox' checked={checked} disabled={disabled}>
                <input
                    id='checkbox'
                    type='checkbox'
                    checked={checked}
                    onChange={handleOnChange}
                    disabled={disabled}
                />
            </StyledLabel>
        </StyledWrapper>
    );
}