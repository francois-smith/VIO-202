import styled from "styled-components";

export const ProjectSection = styled.div`
    background-color:  ${props => props.theme.colors.background2};
    height: 500px;
    position: relative;

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
`;

export const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ProjectCard = styled.div`
    max-width: 800px;
    width: 90vw;

    display: flex;
    justify-content: space-between;

    #project2{
        width: 300px !important;
        height: 390px !important;
    }
`;