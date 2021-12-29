import React from 'react'
import Form from '../../components/Form.js/Form'
import './Home.css'
const Home = () => {
    return (
        <>
            <div className='header'>
                <h1 className='title'>What to Eat</h1>
                <p className='subtitle'>Don't know what to eat? Let us help!</p> 
            </div>
            <Form />
        </>
    )
}

export default Home