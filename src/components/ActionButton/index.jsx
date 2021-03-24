import React from 'react';
import { OuterWrapper } from './ActionButton.styled';

export default function ActionButton({ text, onClick }) {
    return (
        <OuterWrapper onClick={onClick}>
            {text}
        </OuterWrapper>
    );
}
