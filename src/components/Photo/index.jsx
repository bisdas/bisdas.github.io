import React from 'react';
import { OuterWrapper } from './Photo.styled';

export default function Photo({ image, alt, height }) {
    return (
        <OuterWrapper>
            <img src={image} alt={alt} height={height} />
        </OuterWrapper>
    );
}
