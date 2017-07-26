import {  API_URLS, ACTION_TYPE } from '../constants'
import axios from 'axios';
export function SearchForecastForCity(cityName){
    const url = API_URLS.FORECAST+`&q=${cityName}`;
    const request = axios.get(url);
    return {
        type : ACTION_TYPE.SEARCH,
        payload : request
    }
}