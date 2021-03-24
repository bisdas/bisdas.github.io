import React from 'react';
import Bullets from '../Bullets';
import {
    OuterWrapper,
    OrganizationWrapper,
    Organization,
    DesignationAndDuration,
    DurationWrapper,
    DesignationWrapper,
    Designation,
    StartWrapper,
    Start,
    EndWrapper,
    Separator,
    End,
    ActivitiesWrapper,
    BulletWrapper,
    Bullet,
    Content
} from './WorkExperience.styled';

export default function WorkExperience({ experience }) {
    return (
        <OuterWrapper>
            <BulletWrapper>
                <Bullet />
            </BulletWrapper>
            <Content>
                <OrganizationWrapper>
                    <Organization>
                        {experience.organisation}
                    </Organization>
                </OrganizationWrapper>
                <DesignationAndDuration>
                    <DesignationWrapper>
                        <Designation>
                            {experience.designation}{', '}
                        </Designation>
                    </DesignationWrapper>
                    <DurationWrapper>
                        <StartWrapper>
                            <Start>
                                {experience.start}
                            </Start>
                        </StartWrapper>
                        <Separator>
                            {'-'}
                        </Separator>
                        <EndWrapper>
                            <End>
                                {experience.isCurrent ? 'PRESENT' : experience.end}
                            </End>
                        </EndWrapper>
                    </DurationWrapper>
                </DesignationAndDuration>
                <ActivitiesWrapper>
                    <Bullets bullets={experience.activities} icon="hyphen" />
                </ActivitiesWrapper>
            </Content>
        </OuterWrapper>
    );
}
