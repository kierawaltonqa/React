'use strict';
import { useState } from 'react';

const Car = () => {

    const [brand, setBrand] = useState("audi");
    const [model, setModel] = useState("A4");
    const [colour, setColour] = useState("black");
    const [year, setYear] = useState("2018");

    const changeBrand = e => {
        setBrand(e.target.value)
    }
    const changeModel = e => {
        setModel(e.target.value)
    }
    const changeColour = e => {
        setColour(e.target.value)
    }
    const changeYear = e => {
        setYear(e.target.value)
    }

    return (
        <>
            <h1>These are the features of the car: {brand}, {model}, {colour}, {year}</h1>
            <form>
                <input type="brand" name="brand" value={brand} placeholder="brand" onChange={changeBrand} />
                <input type="model" name="model" value={model} placeholder="model" onChange={changeModel} />
                <input type="colour" name="colour" value={colour} placeholder="colour" onChange={changeColour} />
                <input type="year" name="year" value={year} placeholder="year" onChange={changeYear} />

            </form>
        </>
    )

}
export default Car;