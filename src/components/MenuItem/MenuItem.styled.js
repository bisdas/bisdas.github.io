import styled from 'styled-components';

export const OuterWrapper = styled.div`
    display: flex;
    cursor: pointer;
`
export const IconWrapper = styled.div`
    margin-right: 6px;
    height: 100%;
`
export const TextWrapper = styled.div`
    position: relative;
    top: 3px;
    font-size: 12px;
    font-family: nexa-bold, Menlo, Consolas, Verdana, sans-serif;
    letter-spacing: 1px;
    color: #4d4d4d;

    :hover { 
        color: #000000;
    }
`