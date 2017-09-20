import axios from 'axios';

const API_KEY = '79d92d5f09cf1060b6d5d815d2979aaa';

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('Request: ', request);

  return {
    type : FETCH_WEATHER,
    payload: request
  };
}