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
    height: 385px;
    width: 412px;
    top: 28px;
    right: 28px;
    z-index: 0;

    canvas{
        height: 385px;
        width: 412px;
    }

    .panel-bubble{
        position: absolute;
        top: 40px;
        right: 25px;
        width: 192px;
        opacity: 0;
    }

    &:hover .panel-bubble{
        animation: ${FadeIn} 0.8s ease-in-out;
        opacity: 1;
    }
`;
