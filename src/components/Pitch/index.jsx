import React from 'react';
import { OuterWrapper, TextWrapper } from './Pitch.styled';

export default function Pitch({ text }) {
    return (
        <OuterWrapper>
            <TextWrapper>
                {text}
            </TextWrapper>
        </OuterWrapper>
    );
}
