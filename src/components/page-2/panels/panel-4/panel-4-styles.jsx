import styled, {keyframes} from "styled-components";

const FadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% { 
        opacity: 1;
    }
`; 

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

export const PanelContainer = styled.div`
    position: absolute;
    height: 474px;
    width: 397px;
    top: 428px;
    right: 29px;

    canvas{
        height: 474px;
        width: 397px;
    }

    .panel-bubble{
        position: absolute;
        top: 0px;
        left: 0px;
        width: 250px;

        .main-bubble{
            position: absolute;
            width: 140px;
            top: 70px;
            left: 105px;
            opacity: 0;
        }
        
        .second-bubble{
            position: absolute;
            width: 218px;
            top: 0px;
            left: 8px;
            opacity: 0;
        }
    }

    &:hover .main-bubble{
        animation: ${Hover} 0.5s linear 0.1s forwards;
    }

    &:hover .second-bubble{
        animation: ${FadeIn} 0.25s linear 1.15s forwards;
    }
`;
