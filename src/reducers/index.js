import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

// let weather = [];
const rootReducer = combineReducers({
  weather: WeatherReducer,
});

export default rootReducer;
