import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from '../../services/transformWeather';
import {api_weather} from '../../constants/api_url';
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
    temperature: 6,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
}

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Buenos Aires',
            data: data
        }
    }

    handleUpdateClick = () => {
        console.log('Actualizado');
        fetch(api_weather).then( response => {
            return response.json();
        }).then( data => {
            const newWeather = transformWeather(data);
            console.log(newWeather);
            this.setState({
                city: 'Catamarca',
                data: newWeather
            });
        });
    }
    render() {
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}
export default WeatherLocation;