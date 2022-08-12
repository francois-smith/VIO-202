import styled from "styled-components";

export const PageContainer = styled.div`
    width: 1000px;
    position: relative;
    margin: 20px;
    
    #page-2-border{
        position: absolute;
        width: 1000px;
        height: auto;
        top: 0px;
        left: 0px;
        pointer-events: none;
    }

    #page-2-frames{
        width: 1000px;
        height: auto;
        position: relative;
        pointer-events: none;
    }

    #page-2-panel2{
        position: absolute;
        width: 483px;
        height: auto;
        left: 29px;
        top: 430px;
    }

    #page-2-panel5{
        position: absolute;
        width: 1000px;
        height: auto;
        left: 2px;
        bottom: 2px;
    }
`;