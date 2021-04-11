import React, { useState } from 'react';
import { OuterWrapper, CloseIconWrapper, HeaderWrapper, HeaderText, FormInfo, MessageWrapper, ActionWrapper, Instruction, ButtonWrapper } from './Contact.styled';
import ActionButton from '../ActionButton'
import { ReactComponent as IconClose } from '../../assets/icons/IconClose.svg';

export default function Contact({ onSendMessage, onClose }) {
    const [message, setMessage] = useState('');

    // todo: move to utils
    const stopBubbling = (e) => {
        e.stopPropagation();
    }

    return (
        <OuterWrapper onClick={stopBubbling}>
            <HeaderWrapper>
                <HeaderText>
                    Contact me
                </HeaderText>
                <CloseIconWrapper onClick={onClose}>
                    <IconClose height={12} width={12} color="#dadada"/>
                </CloseIconWrapper>
            </HeaderWrapper>
            <FormInfo>
                Leave a message with your contact information.
            </FormInfo>
            <MessageWrapper>
                <textarea
                    onChange={(e) => {
                        setMessage(e.target.value);
                    }}
                    maxLength={400}
                    style={{
                        height: '140px',
                        width: '100%',
                        resize: 'none',
                        borderWidth: '1px',
                        borderColor: '#dadada',
                    }} />
            </MessageWrapper>
            <ActionWrapper>
                <ButtonWrapper>
                    <ActionButton text="Send" onClick={() => onSendMessage(message)} />
                </ButtonWrapper>
                <Instruction>
                    Maximum 400 characters
                </Instruction>
            </ActionWrapper>
        </OuterWrapper>
    );
}