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

export const PanelContainer = styled.div`
    position: absolute;
    height: 347px;
    width: 278px;
    top: 0;
    left: 0;
    top: 432px;
    left: 665px;

    canvas{
        height: 347px;
        width: 278px;
    }

    .panel-bubble{
        position: absolute;
        top: 5px;
        width: 175px;
        left: 50px;
        opacity: 0;
        transition: all 0.3s;
    }

    &:hover img{
        animation: ${Hover} 0.65s linear 3.8s forwards;
    }
`;
