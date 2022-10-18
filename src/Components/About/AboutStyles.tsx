import styled from "styled-components";

export const AboutSection = styled.div`
    background-color:  ${props => props.theme.colors.background1};
    height: 500px;
    position: relative;

    .Section_Heading{
        font-family: "pfeffer";
    }

    .heading-sword{
        position: absolute;
        height: 80px; 
        top: 75px;
        left: 45px;
        transition: all 0.28s ease-in-out;
    }

    &:hover{
        .heading-sword{
            transform: translateX(-15px);
        }

        .Section_Heading{
            -webkit-text-fill-color: transparent;
        }
    }
`;