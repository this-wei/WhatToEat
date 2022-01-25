import React, { useState, useEffect } from 'react'
import Form from '../../components/Form.js/Form'
import './Home.css'
import ResultsContainer from '../../components/ResultsContainer/ResultsContainer.js'

const Home = () => {
    // const [request, setRequest] = useState(null);
    const [results, setResults] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    return (
            <div>

            {!submitted ? (<Form setSubmitted={ setSubmitted } setResults = { setResults }/>) : (<ResultsContainer results={results} setSubmitted={ setSubmitted } /> )}

{/* 
            {results.length !== 0 && (<ResultsContainer results={results} setSubmitted={ setSubmitted } />)} */}

            <button onClick={() => {console.log(results)}}> Log Results </button>
            </div>
    )
}

export default Home