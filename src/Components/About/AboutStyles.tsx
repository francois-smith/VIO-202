import styled from "styled-components";

export const AboutSection = styled.div`
    background-color:  ${props => props.theme.colors.background1};
    height: auto;

    .about-divider{
        padding: 20px 0px 15px;
        display: flex;
        justify-content: center;

        img{
            width: 300px;
        }
    }
`;

export const AboutParagraph = styled.p`
    padding-top: 20px;
    font-size: 20px;
    width: 60%;
    margin: auto;
    text-align: center;
    pointer-events: none;

    @media ${props => props.theme.breakpoints.lg} {
        width: 80%;
    }

    @media ${props => props.theme.breakpoints.md}{
        font-size: 17px;
    }
`;

export const AboutCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 20px;
`;

export const AboutCard = styled.div`
    flex-basis: 35%;
    margin: 25px;

    &:hover div{
        transform: translateY(-10px);
    }

    @media ${props => props.theme.breakpoints.lg} {
        flex-basis: 80%;
    }

`;

export const AboutCardTitle = styled.div`
    display: flex;
    align-items: center;
    transition: all 0.3s ease-in-out;
    pointer-events: none;

    h3{
        letter-spacing: 0.15em;
        font-size: 28px;
        font-weight: 600;
        transform: translateX(35px);
        position: absolute;
    }
    img{
        background-blend-mode: luminosity;
        transition: all 0.3s;
    }

    @media ${props => props.theme.breakpoints.sm}{
        justify-content: center;

        h3{
            text-align: center;
            transform: translateX(0px);
        }

        img{
            margin-left: -10px;
            margin-bottom: 10px;
        }
    }
`;


export const AboutCardDescription = styled.p`
    font-weight: 300;
    font-size: 18px;
    padding-left: 40px;
    padding-top: 10px;
    pointer-events: none;

    @media ${props => props.theme.breakpoints.sm}{
        text-align: center;
        padding: 10px 0px;
    }
`;
