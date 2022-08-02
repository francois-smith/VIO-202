import styled from "styled-components";

export const TipContainer = styled.div`
    width: 1200px;
    position: relative;
    margin: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 26px;

    span{
        color: #fff;
        margin: 0px 10px;
    }

    img{
        width: 300px;
    }

    & img:nth-child(1){
        transform: scale(-1);
    }
`;