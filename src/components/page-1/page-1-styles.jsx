import styled from "styled-components";

export const PageContainer = styled.div`
    width: 70%;
    position: relative;
    margin: 20px;
    
    #page-1-background{
        position: absolute;
        width: 750px;
        height: auto;
    }

    #page-1-frames{
        width: 750px;
        height: auto;
        position: relative;
    }

    #page-1-panel1{
        position: absolute;
        width: 712px;
        height: auto;
        left: 20px;
        top: 20px;
    }

    #page-1-panel2{
        position: absolute;
        width: 206.25px;
        height: auto;
        left: 20px;
        top: 324px;
    }

    #page-1-panel3{
        position: absolute;
        width: 225.25px;
        height: auto;
        left: 250px;
        top: 324px;
    }

    #page-1-panel5{
        position: absolute;
        width: 678px;
        height: auto;
        bottom: 3.5px;
        left: 0;
    }
`;