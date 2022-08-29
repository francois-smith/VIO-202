import styled, { keyframes } from "styled-components";

const FadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% { 
        opacity: 1;
    }
`; 
export const PanelContainer = styled.div`
    position: absolute;
    height: 464px;
    width: 946px;
    bottom: 28px;
    right: 28px;
    z-index: 0;

    canvas{
        height: 464px;
        width: 946px;
    }
`;
