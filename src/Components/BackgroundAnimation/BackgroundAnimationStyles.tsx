import styled from "styled-components";

export const Animation = styled.div`
    svg {
        height: 700px;
        position: absolute;
        bottom: 0px;
        right: 6vw;

        @media ${props => props.theme.breakpoints.xxl}{
            right: 4vw;
            height: 600px;
        }

        @media ${props => props.theme.breakpoints.xl}{
            height: 500px;
        }

        @media ${props => props.theme.breakpoints.md}{
            display: flex;
            width: 100%;
            justify-content: center;
            height: 500px;
        }

        @media ${props => props.theme.breakpoints.xs}{
            left: 0px;
            width: 110%;
            position: absolute;
        }
    } 
`;