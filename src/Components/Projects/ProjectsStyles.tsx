import styled from "styled-components";

export const ProjectSection = styled.div`
    background-color:  ${props => props.theme.colors.background2};
    position: relative;
    padding-bottom: 50px;

    .Section_Heading{
        font-family: "pfeffer";
    }

    .heading-sword{
        position: absolute;
        height: 80px; 
        top: 75px;
        left: 30px;
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

    .align-end{
        text-align: right;
    }

    .ps-3{
        padding-left: 30px;
    }

    .justify{
        text-align: justify;
    }
`;

export const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 75px;
`;

export const ProjectCard1 = styled.div`
    max-width: 800px;
    width: 90vw;

    display: flex;
    justify-content: space-between;

    width: 300px !important;
    height: 390px !important;
`;

export const ProjectCard2 = styled.div`
    max-width: 950px;
    width: 90vw;

    display: flex;
    justify-content: space-between;
    align-items: center;

    h2{
        font-size: 2rem;
        padding-bottom: 20px;
    }

    div:nth-child(2){
        transform: translateY(-20px);
    }

    #project3{
        width: 320px !important;
        height: 410px !important;
    }
`;