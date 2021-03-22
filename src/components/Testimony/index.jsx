import React from 'react';
import { OuterWrapper, Message, Author, Organization } from './Testimony.styled';

export default function Pitch({ message, author, organization }) {
    return (
        <OuterWrapper>
            <Message>
                {message}
            </Message>
            <Author>
                {author}
            </Author>
            <Organization>
                {organization}
            </Organization>
        </OuterWrapper>
    );
}
