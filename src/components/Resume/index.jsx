import React from 'react';
import ResumeSection from './ResumeSection';
import Education from './Education';
import TechnicalSkills from './TechnicalSkills';
import Pitch from '../Pitch';
import Bullets from './Bullets';
import WorkExperiences from './WorkExperiences';
import ScrollUpNavigation from '../ScrollUpNavigation';
import BackNavigation from '../BackNavigation';
import ActionButton from '../ActionButton';

import {
    OuterWrapper,
    ResumeLayout,
    NavigationLayout,
    EducationWrapper,
    NameWrapper,
    RoleWrapper,
    Name,
    Role,
    PitchWrapper,
    HorizontalLayout,
    VerticalLayout,
    LayoutSection,
    ScrollNavigationWrapper,
    BackNavigationWrapper,
    DownloadActionWrapper
} from './Resume.styled';

import { scrollToTop } from '../../utils';

export default function Resume({ onBackNavigation, onDownloadResume }) {

    // todo: move to constants
    const listOfEducation = [
        {
            course: 'Post Graduate Diploma',
            subject: 'Advanced Computing',
            school: 'CDAC-ACTS',
            yearOfPassing: '2013'
        },
        {
            course: 'Bachelor of Engineering',
            subject: 'Computer Science and Engineering',
            school: 'Tripura University',
            yearOfPassing: '2012'
        },
        {
            course: 'Higher Secondary School (10+2)',
            subject: 'Science Stream',
            school: 'Tripura Board',
            yearOfPassing: '2008'
        },
        {
            course: 'Secondary School (10th)',
            subject: 'General Stream',
            school: 'Tripura Board',
            yearOfPassing: '2006'
        },
    ];

    // todo: move to constants
    const techSkills = [
        ['JavaScript', 'TypeScript', 'React JS', 'Redux', 'Redux-Saga', 'Node JS'],
        ['Jest', 'Enzyme', 'WebdriverIO', 'Nightwatch', 'HTML', 'CSS'],
        ['React Native', 'Firebase', 'Webpack', 'Express JS', 'Git']
    ]

    // todo: move to constants
    const highlights = [
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        'Lorem Ipsum is simply dummy text of the printing and',
        'Lorem Ipsum is simply dummy text of the printing and typesetting',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry industry',
        'Lorem Ipsum is simply dummy text of the printing and typesetting',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    ];

    // todo: move to constants
    const workExperience = [
        {
            organisation: '(Payroll: Altimetrik India Private Limited)',
            designation: 'Senior Engineer',
            start: 'JAN 2020',
            end: '',
            isCurrent: true,
            activities: [
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                'Lorem Ipsum is simply dummy text of the printing and',
                'Lorem Ipsum is simply dummy text of the printing and typesetting',
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry industry',
                'Lorem Ipsum is simply dummy text of the printing and typesetting',
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
            ]
        },
        {
            organisation: 'SOCIETE GENERALE GLOBAL SOLUTION CENTRE',
            designation: 'Specialist Software Engineer',
            start: 'MAR 2018',
            end: 'JAN 2020',
            isCurrent: false,
            activities: [
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                'Lorem Ipsum is simply dummy text of the printing and',
                'Lorem Ipsum is simply dummy text of the printing and typesetting',
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry industry',
                'Lorem Ipsum is simply dummy text of the printing and typesetting',
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
            ]
        },
    ]

    return (
        <OuterWrapper>
            <NavigationLayout>
                <BackNavigationWrapper>
                    <BackNavigation text="Back" onClick={onBackNavigation} />
                </BackNavigationWrapper>
                <DownloadActionWrapper>
                    <ActionButton text="Download Resume" onClick={onDownloadResume} />
                </DownloadActionWrapper>
            </NavigationLayout>
            <ResumeLayout>
                <VerticalLayout>
                    <HorizontalLayout>
                        <LayoutSection flex={2} marginRight={30}>
                            <NameWrapper>
                                <Name>Bishnu Das</Name>
                            </NameWrapper>
                            <RoleWrapper>
                                <Role>Frontend Engineer</Role>
                            </RoleWrapper>
                            <PitchWrapper>
                                <Pitch text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
                            </PitchWrapper>
                            <ResumeSection title="Highlights">
                                <Bullets bullets={highlights} icon="circle" />
                            </ResumeSection>
                        </LayoutSection>
                        <LayoutSection flex={1}>
                            <ResumeSection title="Technical Skills">
                                <TechnicalSkills skills={techSkills} />
                            </ResumeSection>
                            <ResumeSection title="Education">
                                {listOfEducation.map((education) => (
                                    <EducationWrapper>
                                        <Education
                                            course={education.course}
                                            subject={education.subject}
                                            school={education.school}
                                            yearOfPassing={education.yearOfPassing}
                                        />
                                    </EducationWrapper>
                                ))}
                            </ResumeSection>
                        </LayoutSection>
                    </HorizontalLayout>
                </VerticalLayout>
                <VerticalLayout>
                    <ResumeSection title="Work Experience">
                        <WorkExperiences experiences={workExperience} />
                    </ResumeSection>
                </VerticalLayout>
            </ResumeLayout>
            <ScrollNavigationWrapper>
                <ScrollUpNavigation showText={true} text="Go to Top" onClick={scrollToTop} />
            </ScrollNavigationWrapper>
        </OuterWrapper>
    );
}
