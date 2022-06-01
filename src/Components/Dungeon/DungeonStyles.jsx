import styled, { keyframes} from "styled-components";
import Thumb from '../../Media/Images/Thumb.svg';

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Oswald');
    margin-top: 120px;
    position: relative;

    #dungeon{
        z-index: 9999;
        width: 101vw;
        margin-left: -0.5vw;
    }
    #map-container-image{
        position: relative;
        z-index: 999;
    }
    .MuiSlider-thumb{
        background-image: url(${Thumb}) !important;
        background-repeat:no-repeat;
        background-position: center; 
    }
    .MuiSlider-thumb {
        width: 50px !important;
        height: 50px !important;
        border-radius: 0% !important;
        margin-top: -30px !important;
        margin-left: -20px !important;
        background-color: rgba(255, 255, 255, 0) !important;
        color: rgba(255, 255, 255, 0) !important;
    }
    .MuiSlider-thumb.Mui-focusVisible, .MuiSlider-thumb:hover{
        box-shadow: none;
    }
    .MuiSlider-rail {
        opacity: 0.9 !important;
        height: 4px !important;
        width: 101% !important; 
    }
    .MuiSlider-mark {
        width: 0px !important;
        height: 0px !important;
    }
    .MuiSlider-markLabel {
        font-family: "medieval", serif !important;
    }
`;

export const SectionsContainer = styled.div`
    position: absolute;
    top: -200px;

    #stats-header{
        width: 450px;
        margin-left: 25px;
        margin-bottom: 50px;
    }
`;

export const StatsSection = styled.div`
    margin-top: 900px;
    flex-direction: column;

    #statsTemp{
        display: flex;
        justify-content: space-between;
    }
`;

export const StatsContainer = styled.div`
    display: flex;
    width: 950px;
`;

export const SwordsContainer = styled.div`
    display: flex;
    flex-direction: column;
    perspective: 2000px;
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
        height: 110px;
        transform: scaleX(-1.25);
        transition: all 0.35s;
    }
    .scabbard{
        position: absolute;
        left: -15px;
        transform: scaleX(-1.5) scale(0.9);
        height: 34px;
        top: 34%;
    }
`;

export const PuglasContainer = styled.div`
    perspective: 2000px;
    margin-top: 500px;
    margin-right: 500px;
    position: relative;

    .puglasAdult{
        height: 525px;
        position: absolute;
        bottom: 185px;
        left: 25px;
        opacity: 0;
    }
    .puglasTeen{
        height: 475px; 
        position: absolute; 
        bottom: 185px; 
        left: -50px;
        opacity: 0;
    }
    .puglasKid{
        height: 425px;
        position: absolute;
        bottom: 185px;
        left: 20px;
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

    
    #pedestal-container{
        margin-top: 320px;
        perspective: 2000px;

        #equipment-info{
            position: absolute;
            top: 220px;
            left: 20px;
            color: ${props => props.theme.colors.textLight};
            transform: rotateX(-15deg) rotateY(-26deg) rotateZ(11deg) perspective(600px) ;
            font-size: 40px;
            font-family: "medieval";
        }
        #pedestalImage{
            width: 800px;
            z-index: 9;
        }
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

export const Bounce = keyframes`
    0% {
        transform: translateY(0px);
    }
    65% {
        transform: translateY(-4px);
    }
    100%{
        transform: translateY(0px);
    }
`

export const MapImage = styled.div`
    z-index: 10;
    position: relative;

    #pin1{
        position: absolute;
        width: 20px;
        top: 45%;
        left: 48%;
        animation: ${Bounce} 1.5s infinite;
    }
    #pin1Info{
        opacity: 0;
        top: 49%;
        left: 48%;
        width: 200px;
        height: auto;
        position: absolute;
        background-color: #a5815d;
        border: 3px solid #42210b;
        padding: 10px;
        color: #ebdad1;
        font-family: "medieval";
        transition: all 0.4s;
        p{
            font-weight: 300;
            font-size: 17px;
        }
    }
    #pin1:hover{
        animation-play-state: paused;
    }
    #pin1:hover + #pin1Info{
        opacity: 1;
    }

    #pin2{
        position: absolute;
        width: 20px;
        bottom: 20%;
        left: 18%;
        animation: ${Bounce} 1.5s infinite;
    }
    #pin2Info{
        opacity: 0;
        bottom: 8%;
        left: 18%;
        width: 200px;
        height: auto;
        position: absolute;
        background-color: #a5815d;
        border: 3px solid #42210b;
        padding: 10px;
        color: #ebdad1;
        font-family: "medieval";
        transition: all 0.4s;
        p{
            font-weight: 300;
            font-size: 17px;
        }
    }
    #pin2:hover{
        animation-play-state: paused;
    }
    #pin2:hover + #pin2Info{
        opacity: 1;
    }

    #pin3{
        position: absolute;
        width: 20px;
        bottom: 25%;
        left: 30%;
        animation: ${Bounce} 1.5s 0.7s infinite;
    }
    #pin3Info{
        opacity: 0;
        bottom: 30%;
        left: 30%;
        width: 200px;
        height: auto;
        position: absolute;
        background-color: #a5815d;
        border: 3px solid #42210b;
        padding: 10px;
        color: #ebdad1;
        font-family: "medieval";
        transition: all 0.4s;
        p{
            font-weight: 300;
            font-size: 17px;
        }
    }
    #pin3:hover{
        animation-play-state: paused;
    }
    #pin3:hover + #pin3Info{
        opacity: 1;
    }

    #pin4{
        position: absolute;
        width: 20px;
        top: 30%;
        left: 30%;
        animation: ${Bounce} 1.5s 0.05s infinite;
    }
    #pin4Info{
        opacity: 0;
        top: 34%;
        left: 30%;
        width: 200px;
        height: auto;
        position: absolute;
        background-color: #a5815d;
        border: 3px solid #42210b;
        padding: 10px;
        color: #ebdad1;
        font-family: "medieval";
        transition: all 0.4s;
        p{
            font-weight: 300;
            font-size: 17px;
        }
    }
    #pin4:hover{
        animation-play-state: paused;
    }
    #pin4:hover + #pin4Info{
        opacity: 1;
    }

    #pin5{
        position: absolute;
        width: 20px;
        top: 10%;
        left: 15%;
        animation: ${Bounce} 1.5s 0.2s infinite;
    }
    #pin5Info{
        opacity: 0;
        top: 14%;
        left: 15%;
        width: 200px;
        height: auto;
        position: absolute;
        background-color: #a5815d;
        border: 3px solid #42210b;
        padding: 10px;
        color: #ebdad1;
        font-family: "medieval";
        transition: all 0.4s;
        p{
            font-weight: 300;
            font-size: 17px;
        }
    }
    #pin5:hover{
        animation-play-state: paused;
    }
    #pin5:hover + #pin5Info{
        opacity: 1;
    }

    img{
        width: 1200px;
        z-index: 10;
    }
    #puglasTown{
        width: 100px;
        height: 60px;
        position: absolute;
        top: 75px;
        right: 55%;
    }
    #puglasTownInfo{
        opacity: 0;
        top: 135px;
        left: 37.5%;
        width: 200px;
        height: auto;
        position: absolute;
        background-color: #a5815d;
        border: 3px SOLID #42210b;
        padding: 10px;
        color: #ebdad1;
        font-family: "medieval";
        transition: all 0.4s;

        h3{
            font-weight: 400;
            font-size: 25px;
            margin-bottom: 6px;
        }
        p{
            font-weight: 300;
            font-size: 17px;
        }
    }
    #puglasTown:hover + #puglasTownInfo{
        opacity: 1;
    }

    #mainTown{
        width: 100px;
        height: 75px;
        position: absolute;
        top: 52.5%;
        left: 8%;
    }
    #mainTownInfo{
        opacity: 0;
        top: 62.5%;
        left: 8%;
        width: 200px;
        height: auto;
        position: absolute;
        background-color: #a5815d;
        border: 3px SOLID #42210b;
        padding: 10px;
        color: #ebdad1;
        font-family: "medieval";
        transition: all 0.4s;

        h3{
            font-weight: 400;
            font-size: 25px;
            margin-bottom: 6px;
        }
        p{
            font-weight: 300;
            font-size: 17px;
        }
    }
    #mainTown:hover + #mainTownInfo{
        opacity: 1;
    }

    #ruins{
        width: 80px;
        height: 60px;
        position: absolute;
        top: 79%;
        left: 51%;
    }
    #ruinsInfo{
        opacity: 0;
        top: 65%;
        left: 51%;
        width: 200px;
        height: auto;
        position: absolute;
        background-color: #a5815d;
        border: 3px SOLID #42210b;
        padding: 10px;
        color: #ebdad1;
        font-family: "medieval";
        transition: all 0.4s;

        h3{
            font-weight: 400;
            font-size: 23px;
            margin-bottom: 6px;
        }
        p{
            font-weight: 300;
            font-size: 17px;
        }
    }
    #ruins:hover + #ruinsInfo{
        opacity: 1;
    }
`;

export const SideCharactersSection = styled.div`
    padding-top: 600px;
    position: relative;
    perspective: 2000px;

    #bridge{
        width: 101vw;
        margin-left: -0.5vw;
        position: relative;
    }
    #husker{
        position: absolute;
        height: 600px;
        right: 350px;
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
        right: 450px;
        top: 170px;
    }
    #husker-torch-flame{
        position: absolute;
        height: 175px;
        right: 470px;
        top: 35px;
    }
    #owliver-torch-flame{
        position: absolute;
        height: 175px;
        left: 320px;
        top: 180px
    }
    #owliver-torch{
        position: absolute;
        height: 150px;
        left: 300px;
        top: 320px;
    }
    #huskerInfo{
        position: absolute;
        right: 400px;
        top: 950px;
        color: #fff;
        transform: rotateX(40deg) rotateY(0deg) rotateZ(-14deg);
        transition: all 0.2s;
        opacity: 0;

        h2{
            font-size: 50px;
        }
        p{
            font-size: 27px;
        }
    }

    #owliverInfo{
        position: absolute;
        left: 275px;
        top: 1100px;
        color: #fff;
        transform: rotateX(40deg) rotateY(8deg) rotateZ(-18deg);
        transition: all 0.2s;
        opacity: 0;

        h2{
            font-size: 50px;
        }
        p{
            font-size: 27px;
        }
    }
`;

export const moveInLeft = keyframes`
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
`


export const AboutSection = styled.div`
    position: relative;
    background-color: #131313 !important;
    margin-top: -20px;
    height: 125vh;
    z-index: 1000;
    display: flex;
    width: 100vw;
    flex-direction: column;
    align-items: center;
    color: ${props => props.theme.colors.textLight};

    #terminal{
        position: absolute;
        bottom: 50px;
        width: 75vw;
    }
    #terminal-intro{
        position: absolute;
        top: 45px;
        left: 15px;
    }
    #terminal-icon{
        position: absolute;
        top: 60px;
        left: 15px;
        font-size: 40px;
        animation: ${moveInLeft} 0.8s infinite;
    }
    #terminal-hint{
        position: absolute;
        bottom: 15px;
        right: 15px;
    }
    #terminal-input{
        position: absolute;
        top: 75px;
        left: 35px;
    }
`;

