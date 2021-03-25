import React from 'react';
import PortalWrapper from '../../portals/PortalWrapper';
import { ModalOuterWrapper } from './Modal.styled';

export default function Modal({ children, onClose }) {
    return (
        <PortalWrapper>
            <ModalOuterWrapper onClick={onClose}>
                {children}
            </ModalOuterWrapper>
        </PortalWrapper>
    );
}