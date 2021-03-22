import React from 'react';
import Brick from '../Brick'
import { OuterWrapper, Header, SkillsTriangle, BrickSpacer, Line } from './Skills.styled';

export default function Skills() {
    //todo: move to constants
    const skillsArrayLines = [
        ['JavaScript', 'React JS', 'Redux', 'Redux-Saga'],
        ['Unit Testing', 'Jest', 'Enzyme', 'WebDriverIO'],
        ['Node JS', 'HTML', 'CSS', 'TypeScript'],
        ['React Native', 'Firebase', 'Git'],
        ['Responsive Design'],
        ['Figma']
    ];

    return (
        <OuterWrapper>
            <Header>
                Tech Skills
            </Header>
            <SkillsTriangle>
                {
                    skillsArrayLines.map((line) => {
                        return (
                            <Line>
                                {
                                    line.map((skill) => (
                                        <BrickSpacer>
                                            <Brick text={skill} />
                                        </BrickSpacer>
                                    ))
                                }
                            </Line>
                        );
                    })
                }
            </SkillsTriangle>
        </OuterWrapper>
    );
}
