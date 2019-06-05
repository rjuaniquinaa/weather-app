import React from 'react';
import WeatherExtraInfoo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from '../../../constants/weathers';
import './styles.css';

const WeatherData = () => (
    <div className="weatherDataCont">
        <WeatherTemperature
            temperature={40}
            weatherState={CLOUDY}
        />
        <WeatherExtraInfoo humidity={80} wind={"10 m/s"}></WeatherExtraInfoo>
    </div>
);

export default WeatherData;