import React from 'react';
import { OuterWrapper, MenuItemWrapper } from './NavMenu.styled';

import MenuItem from '../MenuItem'

import { ReactComponent as IconLinkedIn } from '../../assets/icons/IconLinkedIn.svg';
import { ReactComponent as IconEmail } from '../../assets/icons/IconEmail.svg';
import { ReactComponent as IconGithub } from '../../assets/icons/IconGithub.svg';
import { ReactComponent as IconRecommend } from '../../assets/icons/IconRecommend.svg';
import { ReactComponent as IconResume } from '../../assets/icons/IconResume.svg';

export default function NavMenu() {
    // todo: move literals to constant
    const menuItems = [
        {
            text: 'LinkedIn',
            icon: <IconLinkedIn height={14} width={14} />,
            onClick: () => null
        },
        {
            text: 'Github',
            icon: <IconGithub height={14} width={14} />,
            onClick: () => null
        },
        {
            text: 'Resume',
            icon: <IconResume height={14} width={14} />,
            onClick: () => null
        },
        {
            text: 'Testimony',
            icon: <IconRecommend height={14} width={14} />,
            onClick: () => null
        },
        {
            text: 'Contact',
            icon: <IconEmail height={14} width={14} />,
            onClick: () => null
        }
    ];

    return (
        <OuterWrapper>
            {menuItems.map((item) => (
                <MenuItemWrapper>
                    <MenuItem
                        text={item.text}
                        icon={item.icon}
                        onClick={item.onClick}
                    />
                </MenuItemWrapper>
            ))}
        </OuterWrapper>
    );
}
