import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import WeatherCard from '../containers/weather_card';

export default class App extends Component {
  render() {
    return (
		<div className = 'landing_head'>
			<div className = 'container-fluid' id = 'weather_head'>
				<h1>WEATHER-REACT</h1>
			</div>
			<div className = 'container' id = 'main-part'>
				<SearchBar />
				<WeatherList />
				<WeatherCard />

			</div>
			<ul className="slideshow">
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			</ul>
		</div>

    );
  }
}

//				<div className = 'row'>
//					<WeatherList />
//				</div>
