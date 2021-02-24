'use strict';
import { useState, useEffect } from 'react';
import axios from 'axios';

const FilmRequest = () => {

    const [data, setData] = useState('');
    const [apiKey, setApiKey] = useState('');
    const [filmTitle, setFilmTitle] = useState('');

    const updateApiKey = (e) => {
        e.preventDefault();
        setApiKey(e.target.value)
    }

    const updateFilmTitle = (e) => {
        e.preventDefault();
        setFilmTitle(e.target.value);
    }

    useEffect(() => {
        axios.get("http://www.omdbapi.com/?apikey=" + apiKey + "&t=" + filmTitle)
            .then((response) => {
                setData(response.data);
                console.log(response.data);
            })
    })

    const makeRequest = (e) => {
        axios.get("http://www.omdbapi.com/?apikey=" + apiKey + "&t=" + filmTitle)
            .then(response => {
                console.log(response.data);
                setData(response.data);
            });
    };

    return (
        <>
            <form>
                <label>Enter your API key:</label>
                <input type="text"
                    onChange={(e) => updateApiKey(e)} />
                <label>Enter the name of the film you want:</label>
                <input type="text"
                    onChange={(e) => updateFilmTitle(e)} />
                <button onClick={(e) => makeRequest(e)}>Make Request</button>
            </form>
            <ul>
                <li>{data.Title}</li>
                <li>{data.Year}</li>
                <li>{data.Rated}</li>
                <li>{data.Genre}</li>
                <li>{data.Plot}</li>
            </ul>
        </>
    )
}
export default FilmRequest;