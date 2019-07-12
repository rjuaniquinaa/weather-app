import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import {
    // CLOUD,
    // CLOUDY,
    SUN,
    /* RAIN,
    SNOW,
    WINDY, */
} from '../../constants/weathers';
import './styles.css';

const data = {
    temperature: 21,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
}

class WeatherLocation extends Component {
    render() {
        return (
            <div className="weatherLocationCont">
                <Location city='Brazil'></Location>
                <WeatherData data={data}></WeatherData>
            </div>
        );
    }
}

export default WeatherLocation;