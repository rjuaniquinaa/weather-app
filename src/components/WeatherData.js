import React from 'react';
import WeatherExtraInfoo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

const WeatherData = () => (
    <div>
        <WeatherTemperature></WeatherTemperature>
        <WeatherExtraInfoo></WeatherExtraInfoo>
    </div>
);

export default WeatherData;