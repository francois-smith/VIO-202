import styled from "styled-components";

export const ProjectSection = styled.div`
    background-color:  ${props => props.theme.colors.background1};
    height: auto;

    #Project_Footer {
        text-align: center;
        font-size: 24px;
        padding-bottom: 40px;
        padding-top: 20px;
    }

    @media ${props => props.theme.breakpoints.sm}{
        #Project_Footer {
            font-size: 20px;
        }
    }

    @media ${props => props.theme.breakpoints.xs}{
        #Project_Footer {
            font-size: 17px;
        }
    }
`;

export const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    div:nth-of-type(2n) {
        align-items: flex-end;
        text-align: right;

        .project-links{
            justify-content: flex-end;
        }
        .project-tags{
            justify-content: flex-end;
        }
        .project-image{
            left: 0px;
        }
        .project-description{
            text-align: right;
        }
    }

    @media ${props => props.theme.breakpoints.md}{
        div:nth-of-type(2n) {
            align-items: flex-start;
            text-align: left;

            .project-links{
                justify-content: flex-start;
            }
            .project-tags{
                justify-content: flex-start;
            }
            .project-image{
                right: 0px;
            }
            .project-description{
                text-align: left;
            }
        }
    }
`;

export const Project = styled.div`
    width: 90%;
    max-width: 1000px;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    position: relative;
    overflow: hidden;

    &:hover{
        .project-header{
            transform: translateY(-10px);
        }

        .project-image{
            filter: grayscale(100%) contrast(1) brightness(88%);
        }
        
    }

    .project-content{
        width: 55%;
        position: relative;
        z-index: 2;

        a{
            text-decoration: none;
        }
        .project-header{
            transition: all 0.25s;
        }
        .project-type{
            font-weight: 400;
            font-size: 16px;
            pointer-events: none;
        }
        .project-title{
            font-weight: 600;
            font-size: clamp(24px, 5vw, 28px);
            margin-top: 5px;    
            color:  ${props => props.theme.colors.text};
            transition: all 0.25s;        
        }
        .project-description{
            pointer-events: none;
            padding: 30px;
            background-color:  ${props => props.theme.colors.background2};
            font-weight: 400;
            font-size: 18px;
            border-radius: 5px;
            margin: 25px 0px 15px;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
            text-align: left;
        }
        .project-tags{
            margin-bottom: 10px;
            text-align: left;
            display: flex;
            flex-wrap: wrap;
            pointer-events: none;
        }
        .project-tag{
            padding: 4px 8px;
            font-size: 14px;
        }
        .project-links{
            display: flex;

            .project-link{
                color:  ${props => props.theme.colors.text};
                margin: 5px;

                &:hover{
                    color: ${props => props.theme.colors.primary};
                }
            }
        }
    }
    .project-image{
        width: 50%;
        position: absolute;
        z-index: 1;
        top: 50%;
        transform: translateY(-50%);
        right: 0px;

        img{
            height: 100%;
            width: 100%;

            mix-blend-mode: multiply;
            filter: grayscale(100%) contrast(1) brightness(80%);
        }
    }

    @media ${props => props.theme.breakpoints.md}{
        margin-bottom: 40px;

        border-radius: 4px;
        background-color:  ${props => props.theme.colors.background2};

        &:hover{
            .project-header{
                transform: translateY(0px);
            }
        }

        .project-content{
            padding: 25px;
            width: 100%;

            .project-type{
                font-size: 15px;
            }
            .project-title{
                font-size: clamp(22px, 5vw, 26px);
            }
            .project-description{
                padding: 0px;
                background-color: rgba(255, 255, 240, 0);
                font-size: 16px;
                box-shadow: none;
            }
            .project-tag{
                padding: 0px 16px 0px 0px;
                font-size: 13px;
            }
        }
        .project-image{
            display: none;
        }
    }

    @media ${props => props.theme.breakpoints.sm}{
        margin-bottom: 20px;

        .project-content{
            padding: 15px;
            width: 100%;

            .project-type{
                font-size: 14px;
            }
            .project-title{
                font-size: clamp(20px, 5vw, 25px);
            }
            .project-description{
                font-size: 15px;
            }
            .project-tag{
                padding: 2px 16px 2px 0px;
            }
        }
    }
`;


