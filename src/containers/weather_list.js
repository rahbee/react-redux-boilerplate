import React, { Component } from 'react';
import { connect } from 'react-redux';
import renderWeather from '../utils/helper_weather';

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

// WeatherList.propTypes = {
//   weather: PropTypes,
// };

// WeatherList.defaultProps = {
//   weather: {},
// };

function mapStateToProps(state) {
  return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);

