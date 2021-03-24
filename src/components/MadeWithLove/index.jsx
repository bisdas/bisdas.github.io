import React from 'react';
import { ReactComponent as IconCupid } from '../../assets/icons/IconCupid.svg'
import { OuterWrapper } from './MadeWithLove.styled';

export default function MadeWithLove({ by }) {
    return (
        <OuterWrapper>
            <IconCupid height={34} width={34} />
        </OuterWrapper>
    );
}
