import React from 'react';
import { ReactComponent as IconBack } from '../../assets/icons/IconBack.svg';
import { OuterWrapper, IconWrapper, TextWrapper } from './BackNavigation.styled';

export default function BackNavigation({ text, onClick }) {
    return (
        <OuterWrapper onClick={onClick}>
            <IconWrapper>
                <IconBack color="#1376e0" />
            </IconWrapper>
            <TextWrapper>
                {text}
            </TextWrapper>
        </OuterWrapper>
    );
}
