import React from 'react';
import {
    OuterWrapper,
    Column,
    SkillName
} from './TechnicalSkills.styled';

export default function TechnicalSkills({ skills }) {
    return (
        <OuterWrapper>
            {
                skills.map((skillsColumn, index) => (
                    <Column applyMargin={index !== skills.length - 1}>
                        {
                            skillsColumn.map((skillName) => (
                                <SkillName>
                                    {skillName}
                                </SkillName>
                            ))
                        }
                    </Column>
                ))
            }
        </OuterWrapper>
    );
}
