import React, { useState } from 'react';
import Testimony from '../Testimony';
import ActionLink from '../ActionLink';
import { OuterWrapper, Header, TestimoniesWrapper, Column, Cell, ActionsWrapper } from './Testimonies.styled';

export default function Testimonies() {
    const [showLimited, setShowLimited] = useState(true);

    // todo: move to constants
    const initialShowLimit = 6;

    // todo: move array to constants
    const allTestimonies = [
        {
            message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            author: 'Lorem Ipsum',
            organization: 'Google Inc.',
            date: '2020-10-20'
        },
        {
            message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
            author: 'Typesetting Industry',
            organization: 'Societe Generale',
            date: '2020-10-21'
        },
        {
            message: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
            author: 'Readable Content',
            organization: 'Robert Bosch',
            date: '2020-10-22'
        },
        {
            message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            author: 'Lorem Ipsum',
            organization: 'Google Inc.',
            date: '2020-10-23'
        },
        {
            message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
            author: 'Lorem Ips',
            organization: 'Societe Generale',
            date: '2020-10-20'
        },
        {
            message: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
            author: 'Readable Content',
            organization: 'Robert Bosch',
            date: '2020-10-20'
        },
        {
            message: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
            author: 'Readable Content',
            organization: 'Robert Bosch',
            date: '2020-10-20'
        },
    ];

    const availableTestimonies = showLimited ? allTestimonies.slice(0, initialShowLimit) : allTestimonies;
    const arrangedTestimonies = [];

    (() => {
        const totalCount = availableTestimonies.length;
        const maxNumberOfColumns = 3; // todo: move to constants
        let calculatedNumberOfColumns = 1;

        if (!(totalCount === 1)) {
            while (
                calculatedNumberOfColumns < maxNumberOfColumns &&
                calculatedNumberOfColumns < totalCount
            ) {
                if (calculatedNumberOfColumns > 1 && totalCount / calculatedNumberOfColumns === calculatedNumberOfColumns) {
                    break;
                }
                calculatedNumberOfColumns++;
            }
        }

        let maxCountPerColumn = totalCount % calculatedNumberOfColumns === 0
            ? totalCount / calculatedNumberOfColumns
            : Math.ceil(totalCount / calculatedNumberOfColumns);

        let insertIndex = 0;

        availableTestimonies.forEach((ttm, index) => {
            if (arrangedTestimonies[insertIndex]) {
                arrangedTestimonies[insertIndex].push(ttm);
            }
            else {
                arrangedTestimonies.push([]);
                arrangedTestimonies[insertIndex].push(ttm);
            }

            const metMaxForColumn = (index + 1) % maxCountPerColumn === 0;
            if (metMaxForColumn) {
                insertIndex++;
            }
        })
    })();

    return (
        <OuterWrapper>
            <Header>
                Testimonials
            </Header>
            <TestimoniesWrapper>
                {
                    arrangedTestimonies.map((ttmInColumn, index) => (
                        <Column key={index}>
                            {
                                ttmInColumn.map((ttm, index) => (
                                    <Cell key={index}>
                                        <Testimony
                                            message={ttm.message}
                                            author={ttm.author}
                                            organization={ttm.organization}
                                        />
                                    </Cell>
                                ))
                            }
                        </Column>
                    ))
                }
            </TestimoniesWrapper>
            <ActionsWrapper>
                <ActionLink
                    text={showLimited ? 'Show all' : 'Show less'}
                    onClick={() => { setShowLimited(!showLimited) }}
                />
            </ActionsWrapper>
        </OuterWrapper>
    );
}
