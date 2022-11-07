import styled from "styled-components";

export const AboutSection = styled.div`
    background-color:  ${props => props.theme.colors.background2};
    height: 650px;
    position: relative;
    z-index: 2;

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

    

    .page-inner{
        padding-top: 140px;
        padding-left: 150px;
    }
`;

export const AboutCards = styled.div`
    display: flex;
    transform: translateY(25px);
    position: relative;
    height: 250px;
    width: 90%;

    &::before {
        -webkit-text-fill-color: #515152; 
        content: '<div>';
        font-family: 'pfeffer',cursive;
        color: #515152;
        font-size: 1.4rem;
        position: absolute;
        margin-top: -2rem;
        left: -2.5rem;
    }

    &::after {
        -webkit-text-fill-color: #515152; 
        content: '</div>';
        font-family: 'pfeffer',cursive;
        color: #515152;
        font-size: 1.4rem;
        position: absolute;
        left: -2.5rem;
        bottom: -2rem;
    }

    .about-icon{
        width: 75px;
        height: 75px;
    }

    .aboutCard{
        //gradient border for cards
        width: 10%;
        min-width: 120px;
        border: 3px solid #515152;
        border-radius: 5px;
        padding: 20px;
        margin: 0 5px;
        transition: all 0.5s ease-in-out;

        img{
            transform: translateY(65px);
            transition: all 0.38s ease-in-out;
        }

        .card-content{
            opacity: 0;
            transition: all 0.2s ease-in-out;
            transform: translateY(20px);
            padding-top: 20px;
        }

        .Technologies{
            display: flex;
            padding-top: 8px;

            *{
                margin: 0 5px;
                font-size: 2rem;
            }
        }

        h3{
            font-size: 2rem;
            padding-bottom: 5px;
        }
    }

    .active-card{
        width: 80% !important;

        img{
            transform: translateY(0);
        }

        .card-content{
            opacity: 1;
            transform: translateY(0px);
            transition: all 0.4s 0.4s ease-in-out;
        }
    }
`;