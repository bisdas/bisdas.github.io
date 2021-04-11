import React from 'react';
import { OuterWrapper, MenuItemWrapper } from './NavMenu.styled';
import MenuItem from '../MenuItem'
import { Pages } from '../../constants';
import { ReactComponent as IconLinkedIn } from '../../assets/icons/IconLinkedIn.svg';
import { ReactComponent as IconEmail } from '../../assets/icons/IconEmail.svg';
import { ReactComponent as IconGithub } from '../../assets/icons/IconGithub.svg';
import { ReactComponent as IconRecommend } from '../../assets/icons/IconRecommend.svg';
import { ReactComponent as IconResume } from '../../assets/icons/IconResume.svg';

export default function NavMenu({ onSetActivePage, onShowContact }) {
    // todo: move to constants
    const LinkedIn_Url = "https://linkedin.com/in/bishnud/";
    const Github_Url = "https://github.com/bisdas";

    // todo: move to utils
    const openTab = (pageUrl) => {
        window.open(pageUrl, "_blank")
    }


    // todo: move literals to constant
    const menuItems = [
        {
            text: 'LinkedIn',
            icon: <IconLinkedIn height={14} width={14} />,
            onClick: () => openTab(LinkedIn_Url)
        },
        {
            text: 'Github',
            icon: <IconGithub height={14} width={14} />,
            onClick: () => openTab(Github_Url)
        },
        {
            text: 'Resume',
            icon: <IconResume height={14} width={14} />,
            onClick: () => onSetActivePage(Pages.RESUME)
        },
        // {
        //     text: 'Testimony',
        //     icon: <IconRecommend height={14} width={14} />,
        //     onClick: () => null
        // },
        {
            text: 'Contact',
            icon: <IconEmail height={14} width={14} />,
            onClick: () => onShowContact()
        }
    ];

    return (
        <OuterWrapper>
            {menuItems.map((item, index) => (
                <MenuItemWrapper key={index}>
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
