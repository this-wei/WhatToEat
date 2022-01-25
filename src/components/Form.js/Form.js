import React, { useState } from 'react'
import Axios from "axios";
import { GlobalStyle, StyledFormWrapper, StyledInput, StyledButton, StyledForm, FormChips, SmallStyledInput, StyledTitle, LocationWrapper, SmallChip, MediumChip, DetailsContainer, LocationComboContainer, TextInput, LocationIcon, PriceContainer } from './FormElements.js'
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { formatRequest, getPlacesData } from '../../api/index.js';

const initialState = {
    location: '',
    keyword: '',
    radius: '',
    rating: '',
    maxPriceLevel: '',
    openNow: false,
    neverBeen: false
}

const Form = (props) => {
    const [openNow, setOpenNow] = useState(false);
    const [neverBeen, setNeverBeen] = useState(false);
    const [advancedSearch, setAdvancedSearch] = useState(false);
    const [state, setState] = useState(initialState);
    const [location, setLocation] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const request = formatRequest(state);
        console.log(request);
        getResults(request)
    }

    const handleInput = e => {
        const inputName = e.currentTarget.name;
        const value = e.currentTarget.value;

        setState(prev => ({...prev, [inputName]: value}))
    }

    function getUserLocation() {
        navigator.geolocation.getCurrentPosition(
            position => {
                state.lat = position.coords.latitude;
                state.long = position.coords.longitude;
                setState(prev => ({...prev, location: `${state.lat},${state.long}`}))
            },
            error => {
                console.log("Error getting location");
            }
        )
    }

    const getResults = (request) => {
        Axios.get(`/json?${request}&type=restaurant&key=AIzaSyB_uM3QLt027rycHvILOkW1musfw4m3A1M`).then(
            (response) => {
                props.setResults(response.data.results);
                props.setSubmitted( true );
            })
    }

    return (
        <>
            <GlobalStyle />
            <StyledFormWrapper>
                <StyledForm onSubmit={handleSubmit}>
                    <StyledTitle>{advancedSearch ? "Enter as many or as little details as you like!" : "Please enter a location and a radius"}</StyledTitle> 
                    
                    <LocationWrapper>
                    {/* <label htmlFor='location'>Location</label> */}
                        <LocationComboContainer>
                        <TextInput
                        type="text"
                        name="location" 
                        placeholder='Toronto, ON' 
                        required
                        value={state.location} 
                        onChange={handleInput}
                        />

                        <LocationIcon>
                            <MyLocationIcon onClick={getUserLocation} />
                        </LocationIcon>
                        </LocationComboContainer>

                        <SmallStyledInput 
                        type="number" 
                        name="radius" 
                        placeholder='15 km' 
                        min='1'
                        max='50'
                        required
                        value={state.radius} 
                        onChange={handleInput} />
                    </LocationWrapper> 

                    <DetailsContainer>
                    <SmallChip 
                        label="Add Details" 
                        color={advancedSearch ? "primary" : "default"} 
                        onClick={() => setAdvancedSearch((curr) => (!curr))} />
                    </DetailsContainer>

                    {advancedSearch && (
                        <>
                        <label htmlFor='keyword'>Type of Food</label>
                        <StyledInput 
                        type="text" 
                        name="keyword" 
                        placeholder='Sushi, Pizza, Italian, etc.' 
                        value={state.keyword} 
                        onChange={handleInput} 
                        />
                        
                        <FormChips openNow={openNow} neverBeen={neverBeen}>

                            <label htmlFor='maxPriceLevel'>Max Cost</label>
                            <SmallStyledInput 
                            type="number" 
                            name="maxPriceLevel" 
                            placeholder='1-4' 
                            min='0'
                            max='4'
                            value={state.maxPriceLevel} 
                            onChange={handleInput} 
                            />
                            
                            {/* Places API doesn't support rating */}
                            <label htmlFor='rating'>Rating</label>
                            <SmallStyledInput 
                            type="number" 
                            name="rating" 
                            placeholder='1-5' 
                            min='1' 
                            max='5'
                            value={state.rating} 
                            onChange={handleInput} 
                            />

                            <MediumChip 
                            label="Open now"
                            color={openNow ? "success" : "default"}
                            onClick={() => setOpenNow((curr) => (!curr))}
                            checked={state.openNow = openNow}
                            onChange={handleInput}
                            /> 
                            <MediumChip 
                            label="Never been" 
                            color={neverBeen ? "success" : "default"} 
                            onClick={() => setNeverBeen((curr) => (!curr))}
                            checked={state.neverBeen = neverBeen}
                            onChange={handleInput}
                             />
                        
                        </FormChips> 
                        </>
                    )
                    }
                    <StyledButton type="submit">Let's Eat!</StyledButton>
                </StyledForm>
            </StyledFormWrapper>
        </>    
    )
}

export default Form
