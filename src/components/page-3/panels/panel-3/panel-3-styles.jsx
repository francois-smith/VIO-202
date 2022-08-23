import styled, { keyframes } from "styled-components";

const FadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% { 
        opacity: 1;
    }
`; 

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
        opacity: 1;
    }
    100% { 
        transform: scale(1);
        opacity: 1;
    }
`; 

export const PanelContainer = styled.div`
    position: absolute;
    height: 895px;
    width: 298px;
    top: 269px;
    left: 353px;

    canvas{
        height: 895px;
        width: 298px;
    }

    .panel-bubble{
        position: absolute;
        top: 48px;
        left: 85px;
        width: 250px;

        .main-bubble {
            position: relative;
            width: 150px;
            padding-top: 70px;
            opacity: 0;
        }

        .small-1{
            position: absolute;
            width: 20px;
            transform: translate(-5px, 185px);
            opacity: 0;
        }

        .small-2{
            position: absolute;
            width: 18px;
            transform: translate(-5px, 210px);
            opacity: 0;
        }

        .small-3{
            position: absolute;
            width: 16px;
            transform: translate(-10px, 232px);
            opacity: 0;
        }

        .small-4{
            position: absolute;
            width: 12px;
            transform: translate(-20px, 250px);
            opacity: 0;
        }

    }

    &:hover .main-bubble {
        animation: ${Bounce} 0.55s linear 1.4s forwards;
    }

    &:hover .small-1{
        animation: ${FadeIn} 0.27s linear 1.03s forwards;
    }

    &:hover .small-2{
        animation: ${FadeIn} 0.25s linear 0.6s forwards;
    }

    &:hover .small-3{
        animation: ${FadeIn} 0.22s linear 0.35s forwards;
    }

    &:hover .small-4{
        animation: ${FadeIn} 0.2s linear 0.1s forwards;
    }
`;
