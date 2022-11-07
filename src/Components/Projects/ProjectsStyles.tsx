import styled, {keyframes} from "styled-components";

//keyframes
const stuck = keyframes`
    0% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(1deg);
    }
    60% {
        transform: rotate(-0.5deg);
    }
    100% {
        transform: rotate(0deg);
    }
`;

const move = keyframes`
    0% {
        transform: translatey(0px) translateX(0px) rotate(0deg);
    }
    40%{
        transform: translatey(0px) translateX(-25px) rotate(10deg);
    }
    100% {
        transform: translatey(950px) translateX(-150px) rotate(90deg);
    }
`;

export const ProjectSection = styled.div`
    background-color:  ${props => props.theme.colors.background1};
    position: relative;
    z-index: 1;
    padding-bottom: 50px;
    box-shadow: inset 0px 5px 5px rgba(0,0,0,0.2), inset 0px -5px 5px rgba(0,0,0,0.2); 

    .Section_Heading{
        font-family: "pfeffer";
    }

    .swordContainer{
        position: absolute;
        top: 75px;
        left: 45px;
        transition: all 0.28s ease-in-out;

        .heading-sword{
            height: 80px; 
        }
    }

    &:hover{
        .swordContainer{
            animation: ${move} 1.7s 0.3s forwards ease-in-out;
        }

        .heading-sword{
            animation: ${stuck} 0.8s 2.1s infinite ease-in-out;
            transform-origin: right center;
        }

        .Section_Heading{
            -webkit-text-fill-color: transparent;
        }
    }

    .align-end{
        text-align: right;
    }

    .ps-3{
        padding-left: 30px;
    }

    .pe-3{
        padding-right: 40px;
    }

    .justify-start{
        text-align: start;
    }

    .justify-end{
        text-align: start;
    }

    .divider{
        padding-bottom: 50px !important;
    }
    
    button {
        align-items: center;
        background-image: linear-gradient(144deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.accent} 100%);
        border: 0;
        border-radius: 8px;
        box-sizing: border-box;
        color: ${props => props.theme.colors.text};
        display: flex;
        font-family: "pfeffer", sans-serif;
        font-size: 20px;
        justify-content: center;
        line-height: 1em;
        max-width: 100%;
        min-width: 140px;
        padding: 3px;
        cursor: pointer;
        transition: all .3s;
    }

    button:active, button:hover {
        outline: 0;
    }

    button span {
        background-color: ${props => props.theme.colors.background2};
        padding: 10px 14px;
        border-radius: 6px;
        width: 100%;
        height: 100%;
        transition: 300ms;
    }

    button:hover span {
        background: none;
        color: #fff;
    }

    button:active {
        transform: scale(0.9);
    }

    .button-div{
        display: flex;
        justify-content: start;
        padding-top: 20px;
    }
`;

export const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
`;

export const ProjectCard1 = styled.div`
    max-width: 1000px;
    width: 90vw;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;

    h2{
        font-size: 2rem;
        padding-bottom: 20px;
        transition: all 0.28s ease-in-out;
        pointer-events: none;
    }

    p{
        pointer-events: none;
    }

    div:nth-child(2){
        transform: translateY(-50px);
    }

    &:hover{
        h2{
            transform: translateY(-8px);
        }
    }

    .button-div{
        display: flex;
        justify-content: start;
    }

    #project2{
        width: 400px !important;
        height: 520px !important;
        transition: all 0.5s ease-in-out;
    }
`;

export const ProjectCard2 = styled.div`
    max-width: 1000px;
    width: 90vw;

    display: flex;
    justify-content: space-between;
    align-items: center;

    h2{
        font-size: 2rem;
        padding-bottom: 20px;
        transition: all 0.28s ease-in-out;
        pointer-events: none;
    }

    p{
        pointer-events: none;
    }

    div:nth-child(2){
        transform: translateY(10px);
    }

    &:hover{
        h2{
            transform: translateY(-8px);
        }
    }

    #project3{
        width: 320px !important;
        height: 410px !important;
        transition: all 0.5s ease-in-out;
    }

    &:hover {
        #project2{
            transform: scale(1.1);
        }
    }
`;