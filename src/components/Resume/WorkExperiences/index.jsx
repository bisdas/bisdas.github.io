import React from 'react';
import WorkExperience from '../WorkExperience';
import {
    OuterWrapper,
    WorkExperienceWrapper
} from './WorkExperiences.styled';

export default function WorkExperiences({ experiences }) {
    return (
        <OuterWrapper>
            {
                experiences.map((exp) => (
                    <WorkExperienceWrapper>
                        <WorkExperience experience={exp} />
                    </WorkExperienceWrapper>
                ))
            }
        </OuterWrapper>
    );
}
