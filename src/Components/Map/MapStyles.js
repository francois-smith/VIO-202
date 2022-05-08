import { style } from "@material-ui/system";
import styled, { keyframes} from "styled-components";

export const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    margin-top: -100px;
`;

export const MapContainer = styled.div`
    position: relative;

    #mapImage{
        width: 1500px;
        height: auto;
    }
`;