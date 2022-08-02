import styled from "styled-components";

export const PageContainer = styled.div`
    width: 1000px;
    position: relative;
    margin: 20px;
    
    #page-1-background{
        position: absolute;
        width: 1000px;
        height: auto;
    }

    #page-1-frames{
        width: 1000px;
        height: auto;
        position: relative;
        pointer-events: none;
    }

    #page-1-panel1{
        position: absolute;
        width: 948px;
        height: auto;
        left: 29px;
        top: 28px;
    }

    #page-1-panel2{
        position: absolute;
        width: 274px;
        height: auto;
        left: 29px;
        top: 432px;
    }

    #page-1-panel3{
        position: absolute;
        width: 301px;
        height: auto;
        left: 334px;
        top: 432px;
    }

    #page-1-panel5{
        position: absolute;
        width: 904px;
        height: auto;
        bottom: 3.5px;
        left: 0;
    }
`;