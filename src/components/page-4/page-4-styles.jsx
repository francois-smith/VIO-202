import styled from "styled-components";

export const PageContainer = styled.div`
    width: 1000px;
    position: relative;
    margin: 20px;
    
    #page-4-frames{
        position: absolute;
        width: 1000px;
        height: auto;
        top: 0px;
        left: 0px;
        pointer-events: none;
    }

    #page-4-background{
        width: 999px;
        height: auto;
        position: relative;
        pointer-events: none;
    }

    #page-4-panel1{
        position: absolute;
        width: 948px;
        height: 489px;
        left: 27px;
        top: 27px;
    }

    #page-4-panel3{
        position: absolute;
        width: 558px;
        height: auto;
        left: 27px;
        top: 815px;
    }
`;