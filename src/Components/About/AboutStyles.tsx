import styled from "styled-components";

export const AboutSection = styled.div`
    background-color:  ${props => props.theme.colors.background2};
    height: 650px;
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

export const AboutContainer = styled.div`
    position: relative;
    height: 650px;

    .tags {
        color: #515152;
        position: absolute;
        bottom: 0;
        left: 3rem;
        font-style: italic;
        font-size: 1.4rem;
        font-family: 'pfeffer', cursive;
    }

    .top-tags {
        bottom: auto;
        top: 2rem;
    }

    .top-tags::after {
        margin-left: 0rem;
    }

    .top-tags::after {
        content: '<body>';
        font-family: 'pfeffer', cursive;
        color: #515152;
        font-size: 1.4rem;
        position: absolute;
        margin-left: 2rem;
    }

    .bottom-tags {
        bottom: 2rem;
        top: auto;
    }

    .bottom-tags::before {
        margin-left: 0rem;
    }

    .bottom-tags::before {
        content: '</body>';
        font-family: 'pfeffer',cursive;
        color: #515152;
        font-size: 1.4rem;
        position: absolute;
        margin-left: 2rem;
    }

    h2{
        position: relative;
        margin-bottom: 40px;
        font-size: 2.5rem;
        background: linear-gradient(to right, ${props => props.theme.colors.accent}, ${props => props.theme.colors.primary});
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
    }

    h2::before {
        -webkit-text-fill-color: #515152; 
        content: '<h2>';
        font-family: 'pfeffer',cursive;
        color: #515152;
        font-size: 1.4rem !important;
        position: absolute;
        margin-top: -1.5rem;
        left: -2.5rem;
    }

    h2::after {
        -webkit-text-fill-color: #515152; 
        content: '</h2>';
        font-family: 'pfeffer',cursive;
        color: #515152;
        font-size: 1.4rem;
        position: absolute;
        left: -2.5rem;
        bottom: -1.5rem;
    }

    .about-containers{
        transform: translateY(25px);
        position: relative;
        height: 250px;
    }

    .about-containers::before {
        -webkit-text-fill-color: #515152; 
        content: '<div>';
        font-family: 'pfeffer',cursive;
        color: #515152;
        font-size: 1.4rem;
        position: absolute;
        margin-top: -2rem;
        left: -2.5rem;
    }

    .about-containers::after {
        -webkit-text-fill-color: #515152; 
        content: '</div>';
        font-family: 'pfeffer',cursive;
        color: #515152;
        font-size: 1.4rem;
        position: absolute;
        left: -2.5rem;
        bottom: -2rem;
    }

    .page-inner{
        padding-top: 140px;
        padding-left: 150px;
    }
`;