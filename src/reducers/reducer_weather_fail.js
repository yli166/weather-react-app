import {FETCH_WEATHER_SUCCESS, FETCH_WEATHER, FETCH_WEATHER_FAIL} from '../actions/index';

export function WeatherFail(state = [], action) {
	
	switch (action.type) {
		case FETCH_WEATHER_FAIL : 
			// return state.push(action.payload.data);
			return [action.payload]; //[city,city,city] NOT [city,[city,city]]
			// return [action.payload.data, ...state]; 这个方法是push而不是替换
	}

	// console.log('action received', action);
	return state;
}

