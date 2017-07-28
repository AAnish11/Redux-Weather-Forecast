import { combineReducers } from 'redux';

import { WeatherForecast } from './weather-forecast';

const rootReducer = combineReducers({
  weatherForecast : WeatherForecast
});

export default rootReducer;
