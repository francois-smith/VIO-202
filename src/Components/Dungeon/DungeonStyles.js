import { style } from "@material-ui/system";
import styled, { keyframes} from "styled-components";

export const Container = styled.div`
    margin-top: 120px;
    position: relative;

    #dungeon{
        z-index: 9999;
        width: 101vw;
        margin-left: -0.5vw;
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
    width: 1100px;
`;

export const SwordsContainer = styled.div`
    display: flex;
    flex-direction: column;
    perspective: 2000px;
    margin-top: 900px;
    margin-left: -20px;
    
    #slider{
        width: 150%;
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
        margin-top: 5px;
        font-size: 25px;
        color: ${props => props.theme.colors.textLight};
        position: absolute;
        left: 0px;
        padding-left: 20px;
    }
    .sword{
        height: 100px;
        transform: scaleX(-1.25);
        transition: all 0.35s;
    }
    .scabbard{
        position: absolute;
        left: -15px;
        transform: scaleX(-1.25) scale(0.9);
        height: 32px;
        top: 34%;
    }
`;

export const PuglasContainer = styled.div`
    perspective: 2000px;
    margin-top: 1400px;
    margin-right: 200px;
    position: relative;

    #puglas{
        height: 500px;
        position: absolute;
        bottom: 210px;
        left: 40px;
    }
    #stand{
        height: 220px;
    }
`;

export const EquipmentSection = styled.div`
    width: 100vw;
    height: 1200px;
    display: flex;
    justify-content: center;
    margin-top: 200px;
    z-index: 9;
    position: relative;

    #pedestalImage{
        width: 800px;
        z-index: 9;
    }
    #SwordPedastal{
        position: absolute;
        bottom: 810px;
        z-index: 12;

        img{
            width: 320px;
        }
    }
    #BookPedastal{
        position: absolute;
        bottom: 785px;
        left: 49%;
        z-index: 12;

        img{
            width: 100px;
        }
    }
    #TorchPedastal{
        position: absolute;
        bottom: 720px;
        left: 42%;
        z-index: 12;

        img{
            width: 100px;
        }
    }

    .equipment_item{
        img{
            transition: all 0.2s;
        }
    }

    .equipment_item:hover img{
        transform: translateY(-75px) !important;
    }
`;

export const MapSection = styled.div`
    display: flex;
    justify-content: center;
    margin-top: -400px;
    width: 100vw;
`;

export const MapImage = styled.div`
    z-index: 10;
    position: relative;

    img{
        width: 1200px;
        z-index: 10;
    }
    #puglasTown{
        border: 2px solid;
        width: 100px;
        height: 60px;
        position: absolute;
        top: 75px;
        right: 55%;
        transition: all 0.4s;
    }
    #puglasTown:hover{
        width: 200px;
        height: 120px;
    }
`;

export const SideCharactersSection = styled.div`
    padding-top: 600px;
    position: relative;

    #bridge{
        width: 101vw;
        margin-left: -0.5vw;
    }
    #husker{
        position: absolute;
        height: 600px;
        right: 250px;
        top: 350px;
    }
    #owliver{
        position: absolute;
        height: 600px;
        left: 120px;
        top: 500px;
    }
    #husker-torch{
        position: absolute;
        height: 150px;
        right: 350px;
        top: 170px;
    }
    #owliver-torch{
        position: absolute;
        height: 150px;
        left: 300px;
        top: 320px;
    }
`;

export const AboutSection = styled.div`
    background-color: blue;
    margin-top: -20px;
    height: 112vh;
`;