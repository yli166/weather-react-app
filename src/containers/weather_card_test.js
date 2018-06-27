import React, {Component} from 'react';
import {connect} from 'react-redux';

class WeatherCard extends Component {
	// constructor(props) {
	// super(props);
	// this.state = {
	//   error: null,
	//   loaded: false
	// };
	// }

	imageurl(cityData) {
			if (cityData.length === 0) {
				console.log('test',typeof(cityData[0]));
				return null;
			}
			else {
			let datearray = [];
				for (let i = 0; i < 33 ; i = i + 8) {
					datearray.push(cityData[0].list[i].weather[0].icon);
			}
			return datearray.map(num => ("http://openweathermap.org/img/w/" + num + ".png"))
			}
	}

	date(cityData) {
			if (cityData.length === 0) {
				return null;
			}
			else {
			let datearray = [];
				for (let i = 0; i < 33 ; i = i + 8) {
					datearray.push(cityData[0].list[i].dt_txt.slice(0,10));
			}
			return datearray;
			// return cityData[0].list[0].dt_txt;
			}
	}

	avgTmp (cityData) {
			if (cityData.length === 0) {
				return null;
			}
			else {
			let tempmin_max = [[], []];
			let temparray = [[],[]];
				for (let i = 0; i < 34 ; i ++) {
					if (i % 8 == 0 && i > 0 ) {
					temparray[0].push(Math.min(...tempmin_max[0]));
					temparray[1].push(Math.max(...tempmin_max[1]));
					tempmin_max = [[],[]];
					};
					tempmin_max[0].push(cityData[0].list[i].main.temp_min);
					tempmin_max[1].push(cityData[0].list[i].main.temp_max);			
			};
			temparray[0].push(Math.min(...tempmin_max[0]));
			temparray[1].push(Math.max(...tempmin_max[1]));
			temparray[0] = temparray[0].map(num => (num - 273.15).toFixed(1));
			temparray[1] = temparray[1].map(num => (num - 273.15).toFixed(1));

			return temparray
			};
	};
	
	// judgecode(cityData) {
	// 	if (cityData.length === 0) {
	// 		$( ".card" ).css( "dispaly", "none" );
	// 	};
	// 	else if (cityData.length === 0 || cityData.length === 0 ) {}

	// }

	render() {
		console.log('weatercard', this.props.weather);
		// console.log(this.props.weahter.length == 0);
		// console.log('avgTmp', this.props.weather);
		let imagesarray = this.imageurl(this.props.weather)
		let datearray = this.date(this.props.weather);
		let temparray = this.avgTmp(this.props.weather);
		// console.log(this.renderWeather(this.props.weather).date)
		return(

		<div>
		<div className = 'row'>
			<div className = 'col-md-6 offset-md-3'>
				<div className = 'card'>
					<div className = 'card-block'>
						<h4>{this.props.weather.length == 0 ? null : (this.props.weather[0].city.name + ', ' + this.props.weather[0].city.country)}</h4>
						<h4>{datearray == null ? null : datearray[0]}</h4>
						<img src = {this.props.weather.length == 0 ? null : imagesarray[0]} alt = 'Weather icon' />
		 				<p>Highiest : {temparray == null ? null : temparray[1][0]}℃</p>
	 					<p>Lowiest : {temparray == null ? null : temparray[0][0]}℃</p>
						<button className = 'btn btn-primary'>see detail</button>
					</div>
				</div>
			</div>
		</div>
		<div className = 'row'>
		 <div className = 'col-md-3'>
		 		<div className = 'card'>
		 			<div className = 'card-block' >
		 			<h4>{datearray == null ? null : datearray[1]}</h4>
		 			<img src = {this.props.weather.length == 0 ? null : imagesarray[1]} alt = 'Weather icon' />
		 			<p>Highiest : {temparray == null ? null : temparray[1][1]}℃</p>
	 				<p>Lowiest : {temparray == null ? null : temparray[0][1]}℃</p>
	 				<button className = 'btn btn-primary'>see detail</button>
	 				</div>
				</div>
		</div>
		 <div className = 'col-md-3'>
		 		<div className = 'card'>
		 			<div className = 'card-block' >
		 			<h4>{datearray == null ? null : datearray[2]}</h4>
		 			<img src = {this.props.weather.length == 0 ? null : imagesarray[2]} alt = 'Weather icon' />
		 			<p>Highiest : {temparray == null ? null : temparray[1][2]}℃</p>
	 				<p>Lowiest : {temparray == null ? null : temparray[0][2]}℃</p>
	 				<button className = 'btn btn-primary'>see detail</button>
	 				</div>
				</div>
		</div>
		 <div className = 'col-md-3'>
		 		<div className = 'card'>
		 			<div className = 'card-block' >
		 			<h4>{datearray == null ? null : datearray[3]}</h4>
		 			<img src = {this.props.weather.length == 0 ? null : imagesarray[3]} alt = 'Weather icon' />
		 			<p>Highiest : {temparray == null ? null : temparray[1][3]}℃</p>
	 				<p>Lowiest : {temparray == null ? null : temparray[0][3]}℃</p>
	 				<button className = 'btn btn-primary'>see detail</button>
	 				</div>
				</div>
		</div>
		 <div className = 'col-md-3'>
		 		<div className = 'card'>
		 			<div className = 'card-block' >
		 			<h4>{datearray == null ? null : datearray[4]}</h4>
		 			<img src = {this.props.weather.length == 0 ? null : imagesarray[4]} alt = 'Weather icon' />
		 			<p>Highiest : {temparray == null ? null : temparray[1][4]}℃</p>
	 				<p>Lowiest : {temparray == null ? null : temparray[0][4]}℃</p>
	 				<button className = 'btn btn-primary'>see detail</button>
	 				</div>
		 			</div>
	 	</div>

		</div>
		</div>
		
			);
	}
}

function mapStateToProps({weather}) {
	return {weather : weather};  // {weather} === {weather : weather}
}

export default connect(mapStateToProps)(WeatherCard)