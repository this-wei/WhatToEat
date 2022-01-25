import styled, { createGlobalStyle, css } from 'styled-components';
import { Chip } from '@mui/material';

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        font-family: 'Ubuntu', sans-serif;
        /* background: linear-gradient(to bottom, #e43a15, #e65245); */
        background: #878583;
        height: 100%;
    }
`;

export const SharedStyles = css`
    background-color: #eee;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 10px 0;
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

export const DetailsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 10px;
`;

export const LocationComboContainer = styled.div`
    ${SharedStyles}
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 85%;
`;

export const TextInput = styled.input`
    flex: 1 0;
    min-width: 50px;
    min-height: 25px;
    background-color: transparent;
    padding-left: 5px;
    border: 0;
    &:focus {
        outline: none;
    }
`;

export const LocationIcon = styled.div`
    flex: 0 0;
    cursor: pointer;
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

export const SmallStyledInput = styled(StyledInput)`
    width: 15%;
    ${SharedStyles}

    @media screen and (max-width: 768px) {
        width: 50%;
    }
`;

export const LocationWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 10px;


    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 0px
    }
`;

export const SmallChip = styled(Chip)`
    width: 25%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media screen and (max-width: 768px) {
        width: fit-content;
        padding-bottom: 10px;
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
    justify-content: space-between;
    align-items: baseline;
    /* max-width: 768px; */
    width: 100%;

    @media screen and (max-width: 768px) {
        /* display: none; */
        flex-direction: column;
        align-items: center;
        padding-bottom: 10px;
    }
`;

export const PriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    width: 33%;
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