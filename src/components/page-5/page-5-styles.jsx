import styled from "styled-components";

export const PageContainer = styled.div`
    width: 1000px;
    height: 1433px;
    position: relative;
    margin: 20px;
    z-index: 1;
    
    #page-5-frames{
        position: absolute;
        width: 1000px;
        height: auto;
        top: 0px;
        left: 0px;
        pointer-events: none;
        z-index: 100;
    }

    #page-5-panel3{
        position: absolute;
        width: 946px;
        height: auto;
        left: 27px;
        top: 360px;
        z-index: 10;
        pointer-events: none;
    }
`;