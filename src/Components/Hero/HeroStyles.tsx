import styled, { keyframes } from "styled-components";

export const Welcome = keyframes`
    0% {
        transform: translateY(60px);
    }

    40% {
        opacity: 0%;
    }

    100% {
        transform: translateY(0px);
        opacity: 1;
    }
`;

export const Name = keyframes`
    0% {
        transform: translateY(80px);
    }

    40% {
        opacity: 0%;
    }

    100% {
        transform: translateY(-10px);
        opacity: 1;
    }
`;  

export const Dev = keyframes`
    0% {
        transform: translateY(100px);
    }

    40% {
        opacity: 0%;
    }

    100% {
        transform: translateY(-10px);
        opacity: 1;
    }
`; 

export const CV = keyframes`
    0% {
        transform: translateY(120px);
    }

    40% {
        opacity: 0%;
    }

    100% {
        transform: translateY(0px);
        opacity: 1;
    }
`; 

export const HeroSection = styled.div`
    height: 800px;
    position: relative;

    #folder {
        position: absolute;
        bottom: 0;
        margin-left: 70px;
    }

    .path {
        stroke-dasharray: 1500;
        stroke-dashoffset: 1500;
        animation: dash 2s linear forwards 1.25s;
    }
        
    @keyframes dash {
        to {
            stroke-dashoffset: 0;
        }
    }

    @media ${props => props.theme.breakpoints.xxl} {
        #folder {
            position: absolute;
            bottom: 0;
            height: 250px;
            margin-left: -40px;
        }

        height: 600px;
    }

    @media ${props => props.theme.breakpoints.lg} {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 600PX;

        .path {
           display: none;
        }
    }

    @media ${props => props.theme.breakpoints.md} {
        height: 850px;
    }

    @media ${props => props.theme.breakpoints.md} {
        height: 720px;
    }
`;

export const HeroInfo = styled.div`
    padding-left: 250px;
    padding-top: 22vh;
    margin-right: auto;
    font-family: Raleway, sans-serif;
    position: relative;

    #Welcome {
        padding-left: 2px;
        opacity: 0;
        font-weight: bold;
        font-size: 40px;
        padding-bottom: 40px;
        animation: ${Welcome} 0.6s linear 0.5s forwards;
        pointer-events: none;
    } 

    #Name {
        opacity: 0;
        font-weight: bold;
        font-size: 80px;
        animation: ${Name} 0.7s linear 0.6s forwards;
        pointer-events: none;
    } 

    #Dev {
        opacity: 0;
        font-weight: bolder;
        font-size: 25px;
        color: #929292;
        margin-top: -10px;
        margin-left: 5px;
        animation: ${Dev} 0.8s linear 0.7s forwards;
        pointer-events: none;
        margin-bottom: 5px;
    }

    #CV{
        opacity: 0;
        font-size: 25px;
        animation: ${CV} 0.9s linear 0.8s forwards;
        text-decoration: none;
        position: relative;
        z-index: 100;
    }

    .cv-button {
        width: 175px;
        background-image: linear-gradient(to right, ${props => props.theme.colors.accent}, ${props => props.theme.colors.primary});
        padding: 2px !important;
        border-radius: 6px;
        transition: all 0.25s;
        animation: ${CV} 0.9s linear 0.8s forwards;
        transform: translateY(120px);
        margin-left: 5px;

        &:hover{
            filter: opacity(0.3);
        }

        div {
            padding: 5px;
            border-radius: 6px;
            text-align: center;
            background: ${props => props.theme.colors.background2} !important;
        }
    }

    @media ${props => props.theme.breakpoints.xxl} {
        padding-left: 150px;
        padding-top: 18vh;
        margin-right: auto;

        #Welcome {
            font-size: 32px;
        } 

        #Name {
            font-size: 60px;
        } 

        #Dev {
            font-size: 22px;
        }
        .cv-button {
            width: 150px;
        }
    }

    @media ${props => props.theme.breakpoints.lg} {
        padding-left: 80px;

        #Welcome {
            font-size: 28px;
            padding-bottom: 25px;
        } 

        #Name {
            font-size: 50px;
        } 

        #Dev {
            font-size: 20px;
            padding-top: 10px;
        }

        #CV{
            display: none;
        }
    }
    
    @media ${props => props.theme.breakpoints.md} {
        height: auto;
        padding-top: 100px;
    }

    @media ${props => props.theme.breakpoints.sm} {
        padding-left: 40px;
        padding-top: 100px;

        #Welcome {
            font-size: 24px;
            padding-bottom: 25px;
        } 

        #Name {
            font-size: 38px;
        } 

        #Dev {
            font-size: 16px;
            padding-top: 10px;
        }
    }

    @media ${props => props.theme.breakpoints.xs} {
        padding-left: 20px;
        padding-top: 100px;
        margin-right: auto;

        #Welcome {
            font-size: 22px;
            padding-bottom: 25px;
        } 

        #Name {
            font-size: 35px;
        } 

        #Dev {
            font-size: 14px;
            padding-top: 10px;
        }
    }
`;

export const HeroImage = styled.img`
    height: 700px;
    position: absolute;
    bottom: 0px;
    right: 12vw;
    filter: blur(0.4px);

    @media ${props => props.theme.breakpoints.xxl}{
        right: 13vw;
        height: 500px;
    }

    @media ${props => props.theme.breakpoints.xl}{
        right: 12vw;
        height: 450px;
    }

    @media ${props => props.theme.breakpoints.md} {
        position: absolute;
        bottom: 0px;
        margin-left: -20px;
        right: auto;
        height: 440px;
    }

    @media ${props => props.theme.breakpoints.xs} {
        height: 440px;
        position: absolute;
    }
`;