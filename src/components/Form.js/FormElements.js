import styled, { createGlobalStyle, css } from 'styled-components'
import { Chip } from '@mui/material';

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        font-family: 'Ubuntu', sans-serif;
        background: linear-gradient(to bottom, #e43a15, #e65245);
        height: 100%;
    }
`;

export const SharedStyles = css`
    background-color: #eee;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 10px 0 20px 0;
    padding: 20px;
    box-sizing: border-box;

`;

export const StyledTitle = styled.h2`
    margin-bottom: 10px;
    display: flex;
    justify-content: center;

`;

export const StyledFormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 20px;
`;

export const StyledForm = styled.form`
    width: 100%;
    max-width: 700px;
    padding: 40px;
    background-color: #fff;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

export const StyledInput = styled.input`
    display: block;
    width: 100%;
    ${SharedStyles}
`;

export const MediumStyledInput = styled(StyledInput)`
    width: 85%;
    ${SharedStyles}
`;

export const SmallStyledInput = styled(StyledInput)`
    width: 14%;
    ${SharedStyles}

    @media screen and (max-width: 768px) {
        width: fit-content;
    }
`;


export const LocationWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding-bottom: 10px;
    gap: 10px;


    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const SmallChip = styled(Chip)`
    width: 25%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-bottom: 10px;

    @media screen and (max-width: 768px) {
        width: fit-content;
    }
`;

export const MediumChip = styled(SmallChip)`
    width: 15%;

    @media screen and (max-width: 768px) {
        width: fit-content;
    }

`;

export const FormChips = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: baseline;
    /* max-width: 768px; */
    width: 100%;

    @media screen and (max-width: 768px) {
        /* display: none; */
        flex-direction: column;
        align-content: center;
    }
`;

// There has to be a better way of doing this. Essentially I'm making a 2x2 table, one container for the big and one container for small
export const SmallFormChips = styled(FormChips)`
    display: none;

    /* @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: baseline;
        max-width: 768px;
        gap: 10px;
    } */
`;

export const StyledButton = styled.button`
    display: block;
    background-color: #f7797d;
    color: #fff;
    width: 100%;
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

export const StyledError = styled.div`
    padding-bottom: 10px;
    color: red;
    font-weight: 800;
    margin-bottom: 10px;
`;