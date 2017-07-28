import { API_URLS, ACTION_TYPE } from '../constants';

import axios from 'axios';

export function SearchCityByName(cityName){
    const url = API_URLS.FORECAST+`&q=${cityName}`;
    return {
        type : ACTION_TYPE.SEARCH,
        payload : axios.get(url)
    }
}