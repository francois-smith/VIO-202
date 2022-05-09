import { style } from "@material-ui/system";
import styled, { keyframes} from "styled-components";


export const Container = styled.div`
    width: 100.5vw;
    margin-top: -100px;
    margin-left: -2px;
    position: relative;
    background-color: #b2d7f4;

    #clouds{
        position: absolute;
        width: 100vw;
        height: 100vh;
    }
    #logo{
        position: absolute;
        width: 100vw;
        height: 70vh;
        top: 0px;
        display: flex;
        justify-content: center;
        align-items: center;

        img{
            width: 800px;
            height: auto;
        }
    }
`;