import styled from 'styled-components';

export const OuterWrapper = styled.div`
    
`
export const NavigationLayout = styled.div`
    display: flex;
    padding: 12px 0;
    border-bottom: 1px solid #ededed;
    justify-content: flex-end;
`
export const ResumeLayout = styled.div`
    margin-top: 10px;
    padding-top: 10px;
`
export const EducationWrapper = styled.div`
    margin-bottom: 16px;
`

export const NameWrapper = styled.div`
`

export const RoleWrapper = styled.div`
    margin-bottom: 20px;
`
export const HorizontalLayout = styled.div`
    display: flex;
`
export const VerticalLayout = styled.div`
    
`
export const LayoutSection = styled.div`
    flex: ${props => props.flex};
    margin-left: ${props => props.marginLeft}px;
    margin-right: ${props => props.marginRight}px;
`

export const PitchWrapper = styled.div`
    margin-bottom: 30px;
`
export const Name = styled.div`
    font-size: 28px;
    font-family: arvo-regular, comodo-regular, nexa-light, Verdana, sans-serif;
    color: #1376e0;
    letter-spacing: 1px;
`
export const Role = styled.div`
    font-size: 16px;
    font-family: arvo-regular, comodo-regular, nexa-light, Verdana, sans-serif;
    color: #1376e0;
    letter-spacing: 1px;
    text-transform: Capitalize;
`
export const ScrollNavigationWrapper = styled.div`
    margin-top: 40px;  
    text-align: center; 
`
export const BackNavigationWrapper = styled.div`
   
`
export const DownloadActionWrapper = styled.div`
    margin-left: 20px;
    margin-top: 1px;
`