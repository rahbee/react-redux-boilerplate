import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import renderWeather from '../utils/helpers';

class WeatherList extends Component {
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
          {this.props.weather.map(renderWeather)}
        </tbody>
      </table>
    );
  }
}

WeatherList.propTypes = {
  weather: PropTypes,
};

WeatherList.defaultProps = {
  weather: {},
};

function mapStateToProps(state) {
  return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);

