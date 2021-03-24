import React from 'react';
import {
    OuterWrapper,
    CourseWrapper,
    SubjectWrapper,
    SchoolWrapper,
    YearOfPassingWrapper,
    SingleLine,
    Course,
    Subject,
    School,
    YearOfPassing
} from './Education.styled';

export default function Education({ course, subject, school, yearOfPassing }) {
    return (
        <OuterWrapper>
            <CourseWrapper>
                <Course>
                    {course}
                </Course>
            </CourseWrapper>
            <SubjectWrapper>
                <Subject>
                    {subject}
                </Subject>
            </SubjectWrapper>
            <SingleLine>
                <SchoolWrapper>
                    <School>
                        {school}{','}
                    </School>
                </SchoolWrapper>
                <YearOfPassingWrapper>
                    <YearOfPassing>
                        {yearOfPassing}
                    </YearOfPassing>
                </YearOfPassingWrapper>
            </SingleLine>
        </OuterWrapper>
    );
}
