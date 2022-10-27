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


export const HeroSection = styled.div`
    background-color:  ${props => props.theme.colors.background2};
    height: 650px;
    position: relative;
    z-index: 1;
   
    @keyframes dash {
        to {
            stroke-dashoffset: 0;
        }
    }

    @media ${props => props.theme.breakpoints.xxl} {
        height: 600px;
    }

    @media ${props => props.theme.breakpoints.lg} {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 600PX;
    }

    @media ${props => props.theme.breakpoints.md} {
        height: 850px;
    }

    @media ${props => props.theme.breakpoints.md} {
        height: 720px;
    }
`;

export const HeroInfo = styled.div`
    padding-left: 200px;
    padding-top: 30vh;
    margin-right: auto;
    font-family: Raleway, sans-serif;
    position: relative;
    z-index: 1;

    #Welcome {
        padding-left: 2px;
        opacity: 0;
        font-weight: 600;
        font-size: 34px;
        padding-bottom: 10px;
        animation: ${Welcome} 0.6s linear 0.5s forwards;
        pointer-events: none;
    } 

    #Name {
        opacity: 0;
        font-weight: 600;
        font-size: 70px;
        animation: ${Name} 0.7s linear 0.6s forwards;
        pointer-events: none;
    } 

    @media ${props => props.theme.breakpoints.xxl} {
        padding-left: 150px;
        padding-top: 28vh;
        margin-right: auto;

        #Welcome {
            font-size: 32px;
        } 

        #Name {
            font-size: 60px;
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
    }
`;

export const HeroImage = styled.img`
    height: 600px;
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