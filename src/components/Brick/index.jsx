import React from 'react';
import { OuterWrapper, TextWrapper } from './Brick.styled';

export default function Brick({ text }) {
    return (
        <OuterWrapper>
            <TextWrapper>
                {text}
            </TextWrapper>
        </OuterWrapper>
    );
}
