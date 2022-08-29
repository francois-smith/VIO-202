import styled, { keyframes } from "styled-components";

const Bounce = keyframes`
    0% {
        opacity: 0;
        transform: scale(.3);
    }
    50% {
        opacity: 1;
        transform: scale(1.05);
    }
    70% { 
        transform: scale(.9);
    }
    100% { 
        transform: scale(1);
        opacity: 1;
    }
`; 

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
    height: 505px;
    width: 403px;
    top: 28px;
    left: 28px;
    z-index: 0;

    canvas{
        height: 505px;
        width: 403px;
    }

    .panel-bubble-1{
        position: absolute;
        top: 150px;
        left: 20px;
        width: 109px;
        opacity: 0;
    }

    .panel-bubble-2{
        position: absolute;
        top: 44px;
        left: 96px;
        width: 200px;
        opacity: 0;
    }

    &:hover .panel-bubble-1{
        animation: ${Bounce} 0.55s ease-in-out 4.5s forwards;
    }

    &:hover .panel-bubble-2{
        animation: ${FadeIn} 0.42s ease-in-out 5.8s forwards;
    }
`;
