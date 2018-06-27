import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map'

class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.city.name
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		const {lon,lat} = cityData.city.coord;
		// console.log(humidities)

		return (
			<tr key={name}>
				<td>
					<GoogleMap lon={lon} lat={lat} />
				</td>
				<td><Chart data={temps} color='orange' units='K' /></td>
				<td><Chart data={pressures} color='red' units='hPa' /></td>
				<td><Chart data={humidities} color='blue' units='%' /></td>
			</tr>
			)

	}
	
	// weatherlist(event) {
	// 	if (event) {
	// 		$('#weather_list').css('visibility', 'hidden');
	// 	}
	// 	else {
	// 		$('#weather_list').css('visibility', 'visible');
	// 	}
	// 	console.log(1)
	// 	return event
	// }

	render() {
		// console.log(this.props.weather)
		return (
			<div className = 'card' id = 'weather-list'>
			<table className='table table-hover' id = 'weather-table' >
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidtiy (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
			<button className = 'btn btn-primary' id ='weather-list-btn'>Back to Card</button>
			</div>
			);
	}
}

function mapStateToProps({weather,error}) {
	return {weather : weather.weatherurlstate.payload , error : weather.weatherurlstate.payload.error};  // {weather} === {weather : weather}
}

export default connect(mapStateToProps)(WeatherList)
// this means WeatherList.props.weather can work