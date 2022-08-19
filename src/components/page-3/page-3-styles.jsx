import styled from "styled-components";

export const PageContainer = styled.div`
    width: 1000px;
    position: relative;
    margin: 20px;
    
    #page-3-frames{
        position: absolute;
        width: 1000px;
        height: auto;
        top: 0px;
        left: 0px;
        pointer-events: none;
    }

    #page-3-background{
        width: 999px;
        height: auto;
        position: relative;
        pointer-events: none;
    }

    #page-3-panel5{
        position: absolute;
        width: 947px;
        height: auto;
        left: 29px;
        bottom: 29px;
    }
`;