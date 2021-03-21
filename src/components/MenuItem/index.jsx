import React from 'react';
import { OuterWrapper, IconWrapper, TextWrapper } from './MenuItem.styled';

export default function MenuItem({ icon, text, onClick }) {
    return (
        <OuterWrapper>
            <IconWrapper>
                {icon}
            </IconWrapper>
            <TextWrapper onClick={onClick}>
                {text}
            </TextWrapper>
        </OuterWrapper>
    );
}
