import styled from "styled-components";

export const ContentContainer = styled.div`
    width: 100%;
    height: auto;
    padding: 20px;
    background-color: #f5f5dc;
    text-align: center;
`;

export const ContentTitle = styled.h1`
    font-size: 50px;
    font-family: monospace;
    margin-bottom: 25px;
`;

export const NewsContainer = styled.section`
    width: 90%;
    height: 250px;
    padding: 20px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const News = styled.div`
    width: 20%;
    height: 200px;
    background-color: #C4C4C4;
    border: 1px solid black;
    border-radius: 5px;
    margin: 10px;
    box-shadow: 5px 2.5px 2.5px #E2DFD9;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        transition: 0.15s;
        transform: scale(1.015);
    }

`;

export const NewsTitle = styled.h1`
    font-size: 25px;
    color: #2e2e2e;
    font-family: tahoma;
    font-style: italic;
`;


