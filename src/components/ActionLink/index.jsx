import React from 'react';
import { OuterWrapper } from './ActionLink.styled';

export default function({ text, onClick }) {
    return (
        <OuterWrapper onClick={onClick}>
            {text}
        </OuterWrapper>
    );
}
