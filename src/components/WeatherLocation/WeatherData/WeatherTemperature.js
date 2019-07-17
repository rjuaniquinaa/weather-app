import React from 'react';
import WeatherIcons from 'react-weathericons';
import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE,
} from './../../../constants/weathers';
import PropTypes from 'prop-types';
import './styles.css';

const icons = {
    [CLOUD]: 'cloud',
    [SUN]: 'day-sunny',
    [RAIN]: 'rain',
    [SNOW]: 'snow',
    [THUNDER]: 'day-thunderstorm',
    [DRIZZLE]: 'day-showers',
};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState] ? icons[weatherState] : 'day-hail';
    return <WeatherIcons className="wicon" name={icon} size='4x' />
}

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className="weatherTemperatureCont">
        { getWeatherIcon(weatherState) }
        <span className="temperature"> {temperature} </span>
        <span className="temperatureType"> C°</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;