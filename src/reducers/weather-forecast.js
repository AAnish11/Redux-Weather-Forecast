import { ACTION_TYPE } from '../constants';;
export function WeatherForecast(state = [], action){

    switch(action.type){
        case ACTION_TYPE.SEARCH :
            return [action.payload.data, ...state];

    }

    return state;
}