import styled from "styled-components";

export const GalleryContainer = styled.div`
width: 100%;
height: auto;
padding: 20px;
background-color: #f5f5dc;
text-align: center;
`;

export const GalleryTitle = styled.h1`
    font-size: 50px;
    font-family: monospace;
    margin-bottom: 25px;
`;

export const ImagesContainer = styled.section`
    width: 90%;
    height: 450;
    padding: 20px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Image = styled.div`
    width: 46%;
    height: 400px;
    background-color: #C4C4C4;
    border: 1px solid black;
    border-radius: 5px;
    margin: 10px;
    box-shadow: 5px 2.5px 2.5px #E2DFD9;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ImageTitle = styled.h1`
    font-size: 50px;
    color: #FFFAFA;
    font-family: tahoma;
    font-style: italic;

`;
