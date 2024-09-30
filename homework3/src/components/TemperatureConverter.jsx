import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
const TemperatureConverter = () => {
    const [temperatureCelsius, setTemperatureCelsius] = useState();
    const [temperatureFareng, setTemperatureFareng] = useState();


    const conversionToFareng = (e) => {
        e.preventDefault();
        setTemperatureFareng(temperatureFareng => e.target.value * 1.8 + 32);
    }
    const conversionToCelsius = (e) => {

        setTemperatureCelsius(temperatureCelsius => (e.target.value - 32) / 1.8);

    }

    return (
        <div>
            <TextField onChange={(e) => setTemperatureFareng(e.target.value)}
                onPointerCancel={(e) => setTemperatureFareng(0)} value={temperatureCelsius} style={{ margin: "20px" }} id="outlined-basic" label="Цельсий" variant="outlined" />
            <TextField onChange={(e) => setTemperatureCelsius(e.target.value)} value={temperatureFareng} style={{ margin: "20px" }} id="outlined-basic" label="Фаренгейт" variant="outlined" />
            <div>
                <Button style={{ margin: "20px" }} variant="outlined">Конвертировать</Button>
            </div>
        </div>
    )
}

export default TemperatureConverter
