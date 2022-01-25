import styled, { createGlobalStyle, css } from 'styled-components'
import { Chip } from '@mui/material';

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        font-family: 'Ubuntu', sans-serif;
        background: #dff1f5;
        height: 100%;
    }
`;

export const StyledResultsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    padding: 0 20px;
`;

export const AddressContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledTitle = styled.h2`
    margin-bottom: 10px;
    display: flex;
    justify-content: center;

`;

export const DetailsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    width: 100%;

    @media screen and (max-width: 768px) {
        /* display: none; */
        flex-direction: column;
        align-items: center;
        padding-bottom: 10px;
    }
`;

export const StyledResultsContainer = styled.div`
    width: 100%;
    max-width: 700px;
    padding: 40px;
    margin: 10px;
    background-color: #fff;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

export const StyledButton = styled.button`
    display: block;
    background-color: #f7797d;
    width: 100%;
    max-width: 700px;
    color: #fff;
    font-size: 0.9rem;
    border: 0;
    border-radius: 5px;
    height: 40px;
    padding: 0 20px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    box-sizing: border-box;

    &:hover {
        transition: all 0.2s ease-in-out;
        background-color: #e56e71;

    }
`;

export const MapsLink = styled(Chip)`
    color: #000;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media screen and (max-width: 768px) {
        width: fit-content;
        padding-bottom: 10px;
    }
`;
