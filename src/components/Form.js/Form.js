import React, { useState } from 'react'
import { GlobalStyle, StyledFormWrapper, StyledInput, StyledButton, StyledForm, FormChips, SmallStyledInput, StyledTitle, LocationWrapper, MediumStyledInput, SmallChip, MediumChip } from './FormElements.js'

//NOTES: Implement an advanced search button that expands the rest of the form (new container for the location). New container for the advanced search, look at the extendNavbar in Navbar.js Then a current location button that gets the location of the current user.

const initialState = {
    location: '',
    typeOfFood: '',
    distance: '',
    rating: '',
    openNow: false,
    neverBeen: false
}

const Form = () => {

    const [openNow, setOpenNow] = useState(false);
    const [neverBeen, setNeverBeen] = useState(false);
    const [advancedSearch, setAdvancedSearch] = useState(false);
    const [state, setState] = useState(initialState);

    // Gonna have to change this later to send this info to the API
    const handleSubmit = e => {
        e.preventDefault();
        console.log("submitted");
        console.log(state);
    }

    const handleInput = e => {
        const inputName = e.currentTarget.name;
        const value = e.currentTarget.value;

        setState(prev => ({...prev, [inputName]: value}))
    }

    return (
        <>
            <GlobalStyle />
            <StyledFormWrapper>
                <StyledForm onSubmit={handleSubmit}>
                    <StyledTitle>{advancedSearch ? "Enter as many or as little details as you like!" : "Please enter a location"}</StyledTitle> 
                    
                    <LocationWrapper>
                    {/* <label htmlFor='location'>Location</label> */}
                        <MediumStyledInput 
                        type="text" 
                        name="location" 
                        placeholder='Toronto, ON' 
                        required value={state.location} 
                        onChange={handleInput}
                        />
                        <SmallChip 
                        label="Add Details" 
                        color={advancedSearch ? "primary" : "default"} 
                        onClick={() => setAdvancedSearch((curr) => (!curr))} />
                    </LocationWrapper> 

                    {advancedSearch && (
                        <>
                        <label htmlFor='typeOfFood'>Type of Food</label>
                        <StyledInput 
                        type="text" 
                        name="typeOfFood" 
                        placeholder='Sushi, Pizza, Italian, etc.' 
                        value={state.typeOfFood} 
                        onChange={handleInput} 
                        />
                        
                        <FormChips openNow={openNow} neverBeen={neverBeen}>

                            <label htmlFor='distance'>Distance</label>
                            <SmallStyledInput 
                            type="number" 
                            name="distance" 
                            placeholder='15 km' 
                            min='1'
                            value={state.distance} 
                            onChange={handleInput} 
                            />

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

                    {/* <SmallFormChips>

                        <label htmlFor='distance'>Distance</label>
                        <SmallStyledInput type="number" name="distance" placeholder='15 km' />

                        <label htmlFor='rating'>Rating</label>
                        <SmallStyledInput type="number" name="rating" placeholder='4' min='1' max='5'/>

                    </SmallFormChips>
                        
                    <SmallFormChips>

                        <Chip label="Open now" color={openNow ? "success" : "default"}
                        onClick={() => setOpenNow((curr) => (!curr))}
                        /> 
                        <Chip label="Never been" color={neverBeen ? "success" : "default"} onClick={() => setNeverBeen((curr) => (!curr))} />

                    </SmallFormChips> */}

                    <StyledButton type="submit">Let's Eat!</StyledButton>
                </StyledForm>
            </StyledFormWrapper>
        </>    
    )
}

export default Form
