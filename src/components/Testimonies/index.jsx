import React from 'react';
import Testimony from '../Testimony';
import { OuterWrapper, Header, TestimoniesWrapper, Column, Cell } from './Testimonies.styled';

export default function Testimonies() {
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

    const arrangedTestimonies = [];

    (() => {
        const totalCount = allTestimonies.length;
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

        allTestimonies.forEach((ttm, index) => {
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
                Testimonies
            </Header>
            <TestimoniesWrapper>
                {
                    arrangedTestimonies.map((ttmInColumn) => (
                        <Column>
                            {
                                ttmInColumn.map((ttm) => (
                                    <Cell>
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
        </OuterWrapper>
    );
}
