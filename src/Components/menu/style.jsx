import styled from "styled-components";

export const MenuContainer = styled.div`
    width:  25%
    height: auto;
    margin-right: 50px;
    

    display: flex;
    align-items: center;
    justify-content: space-between;

`;

export const MenuLink = styled.a`
    text-decoration: none;
    font-family: monospace;
    font-size: 25px;
    color: #2e2e2e;
    margin: 10px;
    cursor: pointer;

    &:hover {
        font-size: 25.5px;
    }
`;


