import styled from "styled-components";

export const TechnologiesSection = styled.div`
    position: relative;
    height: auto;

    .TechName{
        font-family: ${props => props.theme.fonts.main};
        font-size: 20px;
        pointer-events: none;
    }

    @media ${props => props.theme.breakpoints.md}{      
        .TechName{
            font-size: 18px;
        }
    }
`;

export const TechSectionHeader = styled.p`
    font-family: ${props => props.theme.fonts.main};
    text-align: center;
    font-size: 30px;
    font-weight: bolder;
    padding-bottom: 10px;
    opacity: 60%;
    pointer-events: none;

    @media ${props => props.theme.breakpoints.xxl}{
        font-size: 26px;
    }

    @media ${props => props.theme.breakpoints.md}{
        font-size: 22px;
    }

    @media ${props => props.theme.breakpoints.sm}{
        font-size: 26px;
    }

    @media ${props => props.theme.breakpoints.sm}{
        font-size: 22px;
    }

    @media ${props => props.theme.breakpoints.xs}{
        font-size: 18px;
    }
`;

export const TechSection = styled.div`
    padding-bottom: 75px;
    position: relative;
`;

export const TechCardsContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 10px;

    @media ${props => props.theme.breakpoints.lg}{
        flex-wrap: wrap;
    }
`;

export const TechCard = styled.div`
    text-align: center;
    padding-right: 45px;
    padding-left: 45px;
    transition: all 0.25s;
    
    img {
        height: 75px;
        margin-left: 20px;
        margin-right: 20px;
        margin-bottom: 10px;
    }

    &:hover{
        transform: translateY(-10px);
    }

    @media ${props => props.theme.breakpoints.xl}{
        padding-right: 30px;
        padding-left: 30px;
    }

    @media ${props => props.theme.breakpoints.lg}{
        flex: 1 0 30%;
        padding-top: 25px;
    }

    @media ${props => props.theme.breakpoints.md}{
        padding-right: 25px;
        padding-left: 25px;
    }

    @media ${props => props.theme.breakpoints.sm}{
        padding-right: 20px;
        padding-left: 20px;
        flex: 1 0 49%;

        img{
            height: 50px;
        }
    }

    @media ${props => props.theme.breakpoints.xs}{
        flex: 1 0 51%;
    }
`;