import styled, {keyframes} from "styled-components";

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
    height: auto;
    width: 465px;
    top: 655px;
    left: 48px;

    canvas{
        height: auto;
        width: 465px;
    }

    .panel-bubble{
        position: absolute;
        top: 40px;
        left: 15px;
        width: 250px;

        .main-bubble {
            position: relative;
            width: 217px;
            opacity: 0;
        }

        .small-1{
            position: absolute;
            width: 20px;
            transform: translate(-15px, 5px);
            opacity: 0;
        }

        .small-2{
            position: absolute;
            width: 18px;
            transform: translate(6px, 12px);
            opacity: 0;
        }

        .small-3{
            position: absolute;
            width: 16px;
            transform: translate(25px, 22px);
            opacity: 0;
        }

        .small-4{
            position: absolute;
            width: 12px;
            transform: translate(40px, 35px);
            opacity: 0;
        }

    }

    &:hover .main-bubble {
        animation: ${FadeIn} 1.2s linear 1.6s forwards;
    }

    &:hover .small-1{
        animation: ${FadeIn} 0.25s linear 1.1s forwards;
    }

    &:hover .small-2{
        animation: ${FadeIn} 0.3s linear 0.7s forwards;
    }

    &:hover .small-3{
        animation: ${FadeIn} 0.20s linear 0.38s forwards;
    }

    &:hover .small-4{
        animation: ${FadeIn} 0.275s linear 0.1s forwards;
    }
`;
