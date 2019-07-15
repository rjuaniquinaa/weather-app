import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import {
    CLOUD,
    // CLOUDY,
    SUN,
    /* RAIN,
    SNOW,
    WINDY, */
} from '../../constants/weathers';
import './styles.css';

const location = "Buenos Aires,ar";
const api_key = "f99bbd9e4959b513e9bd0d7f7356b38d";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

const data = {
    temperature: 6,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
}

const data2 = {
    temperature: 14,
    weatherState: CLOUD,
    humidity: 70,
    wind: '6 m/s',
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
            console.log(data);
            debugger;
        });
        this.setState({
            city: 'Catamarca',
            data: data2
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