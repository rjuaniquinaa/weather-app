import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from '../../services/transformWeather';
import {api_weather} from '../../constants/api_url';
import CircularProgress from '@material-ui/core/CircularProgress';

import './styles.css';

class WeatherLocation extends Component {

    constructor() {
        console.log('constructor');
        super();
        this.state = {
            city: 'Buenos Aires',
            data: null
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

    componentWillMount() {
        console.log('UNSAFE componentWillMount');
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('UNSAFE componentWillUpdate');
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.handleUpdateClick();
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    render() {
        console.log('render');
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                { data ?
                    <WeatherData data={data}></WeatherData> :
                    <CircularProgress size={50}/>
                }
            </div>
        );
    }
}
export default WeatherLocation;