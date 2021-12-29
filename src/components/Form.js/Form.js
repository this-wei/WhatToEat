import React, { useState } from 'react'
import { GlobalStyle, StyledFormWrapper, StyledInput, StyledButton, StyledError, StyledForm, FormChips, SmallStyledInput, StyledTitle, SmallFormChips, LocationWrapper, MediumStyledInput, SmallChip, MediumChip } from './FormElements.js'

//NOTES: Implement an advanced search button that expands the rest of the form (new container for the location). New container for the advanced search, look at the extendNavbar in Navbar.js Then a current location button that gets the location of the current user.

const Form = () => {

    const [openNow, setOpenNow] = useState(false);
    const [neverBeen, setNeverBeen] = useState(false);
    const [advanceSearch, setAdvancedSearch] = useState(false);

    return (
        <>
            <GlobalStyle />
            <StyledFormWrapper>
                <StyledForm>
                    <StyledTitle>{advanceSearch ? "Enter as many or as little details as you like!" : "Please enter a location"}</StyledTitle> 
                    
                    <LocationWrapper>
                    {/* <label htmlFor='location'>Location</label> */}
                        <MediumStyledInput type="text" name="location" placeholder='Toronto, ON' required/>
                        <SmallChip label="Add Details" color={advanceSearch ? "primary" : "default"} onClick={() => setAdvancedSearch((curr) => (!curr))} />
                    </LocationWrapper> 

                    {advanceSearch && (
                        <>
                        <label htmlFor='typeOfFood'>Type of Food</label>
                        <StyledInput type="text" name="typeOfFood" placeholder='Sushi, Pizza, Italian, etc.' />
                        
                        <FormChips openNow={openNow} neverBeen={neverBeen}>

                            <label htmlFor='distance'>Distance</label>
                            <SmallStyledInput type="number" name="distance" placeholder='15 km' />

                            <label htmlFor='rating'>Rating</label>
                            <SmallStyledInput type="number" name="rating" placeholder='4' min='1' max='5'/>

                            <MediumChip label="Open now" color={openNow ? "success" : "default"}
                            onClick={() => setOpenNow((curr) => (!curr))}
                            /> 
                            <MediumChip label="Never been" color={neverBeen ? "success" : "default"} onClick={() => setNeverBeen((curr) => (!curr))} />
                        
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

                    <StyledError><p>Error Message Here </p></StyledError>

                    <StyledButton type="submit">Let's Eat!</StyledButton>
                </StyledForm>
            </StyledFormWrapper>
        </>    
    )
}

export default Form
