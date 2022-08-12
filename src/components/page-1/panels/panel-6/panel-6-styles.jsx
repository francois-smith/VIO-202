import styled, {keyframes} from "styled-components";

const Hover = keyframes`
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
    height: 298px;
    width: 525px;
    bottom: 29px;
    right: 35px;

    canvas{
        height: 298px;
        width: 525px;
    }

    .panel-bubble{
        position: absolute;
        bottom: 50px;
        right: 20px;
        width: 250px;

        img {
            position: relative;
            opacity: 0;
        }

        p{
            position: absolute;
            top: 8px;
            right: 18px;
            text-align: center;
            font-size: 15px;
        }
    }

    &:hover img{
        animation: ${Hover} 0.5s linear forwards;
    }

    span{
        opacity: 0;
    }

    &:hover .one{
        animation: ${FadeIn} 0.25s linear 0.65s forwards;
    }

    &:hover .two{
        animation: ${FadeIn} 0.3s linear 1.1s forwards;
    }

    &:hover .three{
        animation: ${FadeIn} 0.20s linear 1.6s forwards;
    }

    &:hover .four{
        animation: ${FadeIn} 0.275s linear 2.0s forwards;
    }

    &:hover .five{
        animation: ${FadeIn} 0.4s linear 2.8s forwards;
    }
`;
