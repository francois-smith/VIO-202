import styled, { keyframes} from "styled-components";

export const Container = styled.div`
    width: 100vw;

    #sliderItem{
        margin: auto;
        display: block;
        margin-top: 20px;
    }
`;

export const StatsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const SwordsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Stat = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 40px;

    span{
        font-size: 32px;
        color: ${props => props.theme.colors.textLight};
        width: 280px;
        position: absolute;
        right: 0px;
    }
    .sword{
        height: 140px;
        //transform: translateX(325px);
        //transform: translateX(-300px);
    }
    .scabbard{
        position: absolute;
        right: 0px;
        height: 40px;
        top: 35%;
    }
`;

export const PuglasContainer = styled.div`

`;