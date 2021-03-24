import styled from 'styled-components';

export const OuterWrapper = styled.div`
    display: flex;
    flex-direction: row;
`
export const Column = styled.div`
    margin-right: ${props => props.applyMargin ? '16px' : '0'};
`

export const SkillName = styled.div`
    font-size: 13px;
    font-family: Consolas, Menlo, Trebuchet MS, Verdana, sans-serif;
    color: #000000;
    letter-spacing: 1px;
    margin: 4px 0;
`


