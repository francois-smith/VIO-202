import { style } from "@material-ui/system";
import styled, { keyframes} from "styled-components";

export const Container = styled.div`
    margin-top: 120px;
    position: relative;

    #dungeon{
        z-index: 9999;
    }
`;

export const SectionsContainer = styled.div`
    position: absolute;
    top: -200px;
`;

export const StatsSection = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const StatsContainer = styled.div`
    display: flex;
    width: 1200px;
`;

export const SwordsContainer = styled.div`
    display: flex;
    flex-direction: column;
    perspective: 2000px;
    margin-top: 1000px;
    margin-left: -20px;
    
    #slider{
        width: 180%;
        transform: rotateY(30deg) perspective(200px) rotateX(0deg);
        margin-left: 50px;
    }
`;

export const Stat = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    transform: rotateY(30deg) perspective(200px) rotateX(0deg);

    span{
        font-size: 30px;
        color: ${props => props.theme.colors.textLight};
        position: absolute;
        left: 0px;
        padding-left: 20px;
    }
    .sword{
        height: 120px;
        transform: scaleX(-1.25);
        transition: all 0.35s;
    }
    .scabbard{
        position: absolute;
        left: -15px;
        transform: scaleX(-1.25) scale(0.9);
        height: 40px;
        top: 33%;
    }
`;

export const PuglasContainer = styled.div`
    perspective: 2000px;
    margin-top: 1550px;
    margin-right: 150px;
    position: relative;

    #puglas{
        height: 500px;
        position: absolute;
        bottom: 210px;
        left: 40px;
    }
    #stand{
        height: 250px;
    }
`;

export const EquipmentSection = styled.div`
    width: 100vw;
    height: 1200px;
    display: flex;
    justify-content: center;
    margin-top: 400px;
    z-index: 9;

    img{
        width: 1100px;
        z-index: 9;
    }
`;

export const MapSection = styled.div`
    display: flex;
    justify-content: center;
    margin-top: -400px;

    #mapImage{
        width: 1500px;
        z-index: 10;
    }
`;