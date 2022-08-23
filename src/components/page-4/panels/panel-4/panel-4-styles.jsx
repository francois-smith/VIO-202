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
        opacity: 1;
    }
    100% { 
        transform: scale(1);
        opacity: 1;
    }
`; 

export const PanelContainer = styled.div`
    position: absolute;
    height: 333px;
    width: 558px;
    bottom: 30px;
    left: 27px;

    canvas{
        height: 333px;
        width: 558px;
    }

    .panel-bubble{
        position: absolute;
        top: 100px;
        right: 90px;
        width: 260px;
        opacity: 0;
    }

    &:hover .panel-bubble{
        animation: ${Bounce} 0.55s ease-in-out;
        opacity: 1;
    }
`;
