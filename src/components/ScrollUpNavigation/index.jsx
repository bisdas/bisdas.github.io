import React from 'react';
import { ReactComponent as IconUpArrow } from '../../assets/icons/IconUpArrow.svg';
import { OuterWrapper, IconWrapper, TextWrapper } from './ScrollUpNavigation.styled';

export default function ScrollUpNavigation({ text, showText, onClick }) {
    return (
        <OuterWrapper onClick={onClick}>
            <IconWrapper>
                <IconUpArrow />
            </IconWrapper>
            {showText && (
                <TextWrapper>
                    {text}
                </TextWrapper>
            )}
        </OuterWrapper>
    );
}
