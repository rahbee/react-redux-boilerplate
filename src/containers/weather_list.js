import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart'

class WeatherList extends Component {

    renderWeather(cityData) {
        const temps = cityData.list.map(weather => weather.main.temp);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        return (
            <tr key={cityData.city.id}>
                <td>{cityData.city.name}</td>
                <td>
                    <Chart data={temps} color="red" />
                </td>
                <td>
                    <Chart data={humidity} color="red" />
                </td>
                <td>
                    <Chart data={pressure} color="red" />
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table>
                <thead className="table table-hover">
                <tr>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
    return {weather : state.weather};
}

export default connect(mapStateToProps)(WeatherList);



