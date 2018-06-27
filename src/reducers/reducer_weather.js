import {FETCH_WEATHER_SUCCESS, FETCH_WEATHER, FETCH_WEATHER_FAIL} from '../actions/index';

const intialState = {weatherurlstate : {
	payload : [],
	error : null,
	loading : false
}}

export function WeatherReducer(state = intialState, action) {
	
	switch (action.type) {

		case FETCH_WEATHER_SUCCESS : 
			// return state.push(action.payload.data);
			return {...state, weatherurlstate : {
				payload : [action.payload.data],
				error : null,
				loading : false
			}}; //[city,city,city] NOT [city,[city,city]]
			// return [action.payload.data, ...state]; 这个方法是push而不是替换

		case FETCH_WEATHER : 
			// return state.push(action.payload.data);
			return {...state, weatherurlstate : {
				payload : [],
				error : null,
				loading : true
			}};		

		case FETCH_WEATHER_FAIL : 
			// return state.push(action.payload.data);
			return {...state, weatherurlstate : {
				payload : [],
				error : 'please choose available country or check your input again',
				loading : true
			}};
	}

	// console.log('action received', action);
	return state;
}

