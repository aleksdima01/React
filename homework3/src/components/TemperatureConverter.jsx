import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import './temperatureConverter.css'
import PropTypes from 'prop-types';

const TemperatureConverter = () => {
    const [temperatureCelsius, setTemperatureCelsius] = useState("");
    const [temperatureFareng, setTemperatureFareng] = useState("");
    const [displayResult, setDisplayResult] = useState(false);


    const conversionToFareng = (e) => {
        setTemperatureCelsius(parseFloat(e.target.value))
        setTemperatureFareng((e.target.value * 1.8 + 32).toFixed(3));
    }
    const conversionToCelsius = (e) => {
        setTemperatureFareng(parseFloat(e.target.value))
        setTemperatureCelsius(((e.target.value - 32) / 1.8).toFixed(3));

    }
    const showResult = () => {
        setDisplayResult(displayResult ? false : true)
    }


    return (
        <div>
            <TextField onChange={conversionToFareng}
                value={temperatureCelsius} style={{ margin: "20px" }}
                type='number'
                id="outlined-basic" label="Цельсий" variant="outlined" />
            <TextField onChange={conversionToCelsius} value={temperatureFareng}
                type='number'
                style={{ margin: "20px" }} id="outlined-basic" label="Фаренгейт" variant="outlined" />
            <div>
                <Button onClick={showResult} style={{ margin: "20px" }} variant="outlined">Показать</Button>
                <div className={displayResult ? 'active' : 'hidden'}>
                    <p className='text'>Температура в Цельсиях: {temperatureCelsius}</p>
                    <p className='text'>Температура в Фаренгейтах: {temperatureFareng}</p>
                </div>
            </div>
        </div>
    )
}

TemperatureConverter.propTypes = {
    temperatureCelsius: PropTypes.number,
    temperatureFareng: PropTypes.number
};

export default TemperatureConverter
