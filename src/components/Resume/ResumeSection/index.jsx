import React from 'react';
import {
    OuterWrapper,
    SectionTitleWrapper,
    ChildrenWrapper
} from './ResumeSection.styled';

export default function ResumeSection({ title, children }) {
    return (
        <OuterWrapper>
            <SectionTitleWrapper>
                {title}
            </SectionTitleWrapper>
            <ChildrenWrapper>
                {children}
            </ChildrenWrapper>
        </OuterWrapper>
    );
}
