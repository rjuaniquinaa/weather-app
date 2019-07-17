import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';

import getUrlWeatherByCity from '../../services/getUrlWeatherbyCity';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from '../../services/transformWeather';

import './styles.css';

class WeatherLocation extends Component {

    constructor(props) {
        console.log('constructor');
        super(props);
        const { city } = props;
        this.state = {
            city: city,
            data: null
        }
    }

    handleUpdateClick = () => {
        console.log('Actualizado');
        const apiWeather = getUrlWeatherByCity(this.state.city);
        fetch(apiWeather).then( response => {
            return response.json();
        }).then( data => {
            const newWeather = transformWeather(data);
            console.log(newWeather);
            this.setState({
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

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
}

export default WeatherLocation;