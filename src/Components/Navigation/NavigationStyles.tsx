import styled, { keyframes} from "styled-components";

export const Navigation = styled.nav`
    width: 100vw;

    .menu-logo{
        img{
            height: 50px;
        }
    }
    .bm-cv-button {
        background-image: linear-gradient(to right, ${props => props.theme.colors.accent}, ${props => props.theme.colors.primary});
        padding: 2px !important;
        border-radius: 6px;
        margin-top: 25px;

        div {
            padding: 5px;
            border-radius: 6px;
            text-align: center;
            background: ${props => props.theme.colors.background1} !important;
        }
    }
    .bm-burger-button {
        display: none;
        position: fixed;
        height: 40px;
        right: 25px;
        top: 25px;
        transition: all 0.25s;
    }
    .bm-cross-button {
        height: 40px;
        width: 40px;
        top: 20px !important;
        right: 20px !important;
    }
    .bm-cross-button:first-child span {
        top: 5px !important;
        right: 1px !important;
    }
    .bm-cross {
        height: 3px !important;
        width: 20px !important;
    }
    .bm-cross {
        background-color: ${props => props.theme.colors.text};
    }
    .bm-menu {
        background: ${props => props.theme.colors.background1};
        padding: 2.5em 1.5em 0;
        font-size: 1.15em;
    
        svg{
            transform: scale(1.4);
            color: ${props => props.theme.colors.text};
            margin-right: 20px;
            margin-top: 10px;
            &:hover{
                color: ${props => props.theme.colors.primary};
            }
        }
    }
    .bm-item-list {
        padding: 0.8em;
        padding-top: 25px;
    }
    .bm-item {
        color: ${props => props.theme.colors.text};
        text-decoration: none;
        padding: 7.5px 0px;
        position: relative;

        &:hover{
            color: ${props => props.theme.colors.primary};
        }
    }
    @media ${props => props.theme.breakpoints.xl}{
        .bm-burger-button {
            display: block;
        }

        width: 0px;
    }
`;

export const FadeIn = keyframes`
    from {
        transform: translateY(-24px);
        opacity: 0;
    }
    to {
        transform: translateY(0px);
        opacity: 1;
    }
`;

export const NavigationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100vw;
    padding-left: 200px;
    padding-right: 200px;
    align-items: center;
    padding-top: 20px;
    
    a{
        text-decoration: none;
        color:  ${props => props.theme.colors.text};
    }

    li {
        list-style: none;
    }

    img {
        height: 75px;
    }

    @media ${props => props.theme.breakpoints.xxl} {
        padding-left: 50px;
        padding-right: 50px;
    }

    @media ${props => props.theme.breakpoints.xl} {
        display: none;

        width: 0vw;
    }
`;


export const NavigationLinks = styled.div`
    display: flex;
    align-items: center;

    li {
        padding-left: 40px;
        opacity: 0;
    }

    .first{animation: ${FadeIn} 0.2s linear forwards;}
    .second{animation: ${FadeIn} 0.2s linear 0.1s forwards;}
    .third{animation: ${FadeIn} 0.2s linear 0.2s forwards;}
    .fourth{animation: ${FadeIn} 0.2s linear 0.3s forwards;}
`;

export const NavigationSocials = styled.div`
    align-items: center;
    display: flex;

    .svg_icon {
        margin-left: 15px;
        padding-top: 2px;
        transform: scale(2.5);
    }

    .first{animation: ${FadeIn} 0.2s linear forwards;}
    .second{animation: ${FadeIn} 0.2s linear 0.2s forwards;}
    .third{animation: ${FadeIn} 0.2s linear 0.4s forwards;}
`;

export const Link = styled.a`
    position: relative;
    display: inline-block;
    transition: color .2s ease;
    text-decoration: none;
    margin-bottom: 10px;
    color:  ${props => props.theme.colors.text};

    &:hover{
        color: #666;

        &::after, &::before {
            width: 100%;
            left: 0;
        }
    }

    &::after, &::before {
        content: ''; 
        position: absolute;
        top: calc(100% + 5px);
        width: 0;
        right: 0;
        height: 3px;
    }
    
    &::before {
        transition: width .4s cubic-bezier(0.51, 0.18, 0, 0.88) .1s;
        background: ${props => props.theme.colors.accent};
    }
    
    &::after {
        transition: width .2s cubic-bezier(0.29, 0.18, 0.26, 0.83);
        background: ${props => props.theme.colors.primary};
    }

    
`;

export const Social = styled.a`
    opacity: 0;
    margin-right: 40px;
    position: relative;
    display: inline-block;
    color:  ${props => props.theme.colors.text};

    &:hover{
        color: #666;

        span::after, span::before {
            width: 65%;
            left: 0;
        }
    }

    span::after, span::before {
        content: ''; 
        position: absolute;
        top: calc(100% + 2px);
        width: 0;
        right: 0;
        height: 3px;
    }
    
    span::before {
        transition: width .4s cubic-bezier(0.51, 0.18, 0, 0.88) .1s;
        background: ${props => props.theme.colors.accent};
    }
    
    span::after {
        transition: width .2s cubic-bezier(0.29, 0.18, 0.26, 0.83);
        background: ${props => props.theme.colors.primary};
    }

    &:hover{
        .svg_icon {
            color: ${props => props.theme.colors.primary};
        }
    }
`;