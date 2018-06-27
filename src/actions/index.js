import axios from 'axios';

const API_KEY = '5de7d8dc203c8af5a96f430581c5dff2';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAIL = 'FETCH_WEATHER_FAIL';

// export function fetchWeather (city,country = 'US') {
// 	const url = `${ROOT_URL}&q=${city},${country}`;
// 	var request = axios.get(url).then((response) => {return response});
// 	// console.log(request["[PromiseValue]"],'request test')	
	
// 	// console.log(request,'test')
// 	// console.log('outer',request);

// 	return {
// 		type : FETCH_WEATHER,
// 		payload : request
// 	};
// };

function getWeatherSuccess(response) {
  return {
    type: FETCH_WEATHER_SUCCESS,
    payload: response
  }
}

function getWeatherFail(error) {
	return {
		type : FETCH_WEATHER_FAIL,
		payload : error
	}
}

export function fetchWeather (city,country = 'US') {
	const url = `${ROOT_URL}&q=${city},${country}`;
	return function action(dispatch){ 
		dispatch ({type : FETCH_WEATHER})

		axios.get(url).then((response) => {dispatch(getWeatherSuccess(response))}, 
		(error) => {dispatch(getWeatherFail(error))});
};
};