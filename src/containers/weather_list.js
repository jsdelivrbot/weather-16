/**
 * Created by lucas on 3/1/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';

const kelvinToCelsius = temperature => temperature - 273.15;
const getTemperature = weather => kelvinToCelsius(weather.main.temp);
const getHumidity = weather => weather.main.humidity;
const getPressure = weather => weather.main.pressure;

class WeatherList extends Component {

    renderWeather(cityData) {

        const name = cityData.city.name;
        const temps = cityData.list.map(getTemperature);
        const pressures = cityData.list.map(getPressure);
        const humidities = cityData.list.map(getHumidity);

        return (
            <tr key={name}>
                <td>{name}</td>
                <td>
                    <Chart data={temps} color="blue" units="°C"/>
                </td>
                <td>
                    <Chart data={pressures} color="black" units="hPa"/>
                </td>
                <td>
                    <Chart data={humidities} color="green" units="%"/>
                </td>
            </tr>
        );
    }

    render() {

        return (

            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (K)</th>
                    <th>Pressure (hPA)</th>
                    <th>Humidity (%)</th>
                </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );

    }
};

function mapStateToProps({weather}) {
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);