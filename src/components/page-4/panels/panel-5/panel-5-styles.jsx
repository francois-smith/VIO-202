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
    height: 861px;
    width: 360px;
    bottom: 29px;
    right: 29px;

    canvas{
        height: 861px;
        width: 360px;
    }

    .panel-bubble{
        position: absolute;
        bottom: 225px;
        left: 115px;
        width: 120px;
        opacity: 0;
    }

    &:hover .panel-bubble{
        animation: ${FadeIn} 1.2s ease-in-out;
        opacity: 1;
    }
`;
