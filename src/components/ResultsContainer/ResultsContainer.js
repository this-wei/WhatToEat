import React, { useState } from 'react';
import { GlobalStyle, StyledResultsContainer, StyledResultsWrapper, StyledTitle, DetailsContainer, AddressContainer, StyledButton, MapsLink } from './ResultContainerElements'
import { display } from '@mui/system';

const ResultsContainer = (props) => {

    const results = props.results;

    function get3RandomInt(min, max) {
        let ints = [];

        while (!(ints.length === 3)) {
            const value = getRandomInt(0,20)
            if (!ints.includes(value)) {
                ints.push(value)
            }
        }

        return ints
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }

    const indexes = get3RandomInt(0, 20)

    return (
        <>
            <GlobalStyle />
            <StyledResultsWrapper>
                <StyledResultsContainer>
                    <StyledTitle> {results[indexes[0]].name} </StyledTitle>
                    <AddressContainer> {results[indexes[0]].vicinity} </AddressContainer>
                    <DetailsContainer>
                        <div>Google Rating: {results[indexes[0]].rating} </div>
                        <div>Price Level: {results[indexes[0]].price_level} </div>
                        <MapsLink 
                        label="Google Maps"
                        color="primary"
                        onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${results[indexes[0]].geometry.location.lat},${results[indexes[0]].geometry.location.lng}`)}
                        />
                    </DetailsContainer>
                </StyledResultsContainer>
                <StyledResultsContainer>
                    <StyledTitle> {results[indexes[1]].name} </StyledTitle>
                    <AddressContainer> {results[indexes[1]].vicinity} </AddressContainer>
                    <DetailsContainer>
                        <div>Google Rating: {results[indexes[1]].rating} </div>
                        <div>Price Level: {results[indexes[1]].price_level} </div>
                        <MapsLink 
                        label="Google Maps"
                        color="primary"
                        onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${results[indexes[1]].geometry.location.lat},${results[indexes[1]].geometry.location.lng}`)}
                        />
                    </DetailsContainer>
                </StyledResultsContainer>
                <StyledResultsContainer>
                    <StyledTitle> {results[indexes[2]].name} </StyledTitle>
                    <AddressContainer> {results[indexes[2]].vicinity} </AddressContainer> 
                    <DetailsContainer>
                        <div>Google Rating: {results[indexes[2]].rating} </div>
                        <div>Price Level: {results[indexes[2]].price_level} </div>
                        <MapsLink 
                        label="Google Maps"
                        color="primary"
                        onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${results[indexes[2]].geometry.location.lat},${results[indexes[2]].geometry.location.lng}`)}
                        />
                    </DetailsContainer>
                </StyledResultsContainer>
                <StyledButton onClick={() => props.setSubmitted((curr) => (!curr))}>Search again!</StyledButton>  
            </StyledResultsWrapper>
        </>
    )
}

export default ResultsContainer
