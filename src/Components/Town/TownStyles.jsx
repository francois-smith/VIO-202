import { style } from "@material-ui/system";
import styled, { keyframes} from "styled-components";


export const Container = styled.div`
    width: 100.5vw;
    height: 100vh;
    margin-top: -50px;
    margin-left: -2px;
    position: relative;
    background-color: #b2d7f4;
    z-index: 0;

    #clouds{
        position: absolute;
        width: 100vw;
        height: 100vh;
        margin-top: -50px;
    }
    #logo{
        position: absolute;
        width: 100vw;
        height: 70vh;
        top: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        filter: drop-shadow(4px 4px 3px #202020);

        img{
            width: 800px;
            height: auto;
        }
    }
`;