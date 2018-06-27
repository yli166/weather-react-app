import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';
import {helpers} from '../actions/index';
class SearchBar extends Component {
	constructor (props) {
		super(props);

		this.state = {term : '', country : 'US', load : 'false', error : 'true'};

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.changeCountry = this.changeCountry.bind(this);
		this.errorbar = this.errorbar.bind(this);
		// if you're ever passing a callback around as a function and referance bind to context
		// It's a function that's defined outside of the render function, as onInputChange(), 
		// which is then used as a callback when onChange is called, rather than being defined directly in onChange. 
		// It runs when the onChange event occurs, and picks up the event parameter.
	}

	changeCountry (event) {

		this.setState( {country : event.target.textContent} );
	}

	onInputChange(event) {
		this.setState({term : event.target.value})
		// console.log(typeof this)
		// 这是箭头函数的简写，箭头函数的this是undefined；
	}
	
	onFormSubmit(event) {
		event.preventDefault();
	
		this.props.fetchWeather(this.state.term, this.state.country);
		console.log(1)

		this.setState({term : ''});
	}

	errorbar(event) {
		if (event) {
			$( '#error_bar' ).css('visibility','visible');
			$('#weather_card').css('display', 'none');
			$('#weather_list').css('display','none')
			console.log('is not true',event)
		}
		else{
			$( '#error_bar' ).css('visibility','hidden');
			$('#weather_card').css('display', 'block');
			$('#weather-list').css('display', 'none');
			console.log('true',event)
		}
	}

	render() {
		// if (this.props.weather.weatherurlstate.error != null) {
		// 	console.log('searchbar test',this.props.weather.weatherurlstate.error);
		// };

		return (
			<div>
				<div className = 'alert alert-primary' role='alert' id = 'error_bar'>
				{this.errorbar(this.props.weather.weatherurlstate.error)}please choose available country or check your input again
				</div>
			<form onSubmit = {this.onFormSubmit}>
				<div className = 'row' id = 'searchBar'>
						<div className = 'col-md-7 offset-md-2'>
							<div className = 'input-group'>
			                  <div className="dropdown search-panel">
			                      <button type="button" id="dropdownMenuButton" className="btn btn-secondary btn-outline-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"aria-expanded="false">
			                      <span id="search_concept" ><span>US</span></span>
			                      </button>
			                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
			                        <a className="dropdown-item" href="#" onClick = {this.changeCountry} ><span></span>US</a>
			                        <a className="dropdown-item" href="#" onClick = {this.changeCountry} ><span></span>CN</a>
			                        <a className="dropdown-item" href="#" onClick = {this.changeCountry} ><span></span>UK</a>
			                      </div>
			                  </div>
							<input type="hidden" name="search_param" value="all" id="search_param" /> 
							<input 
							placeholder = 'get a five-day forcast in your favorite cities' 
							className='form-control' 
							value = {this.state.term}
							onChange = {this.onInputChange} />						
							</div>
						</div>
						<div className = 'col-md-1' >
							<button type = 'submit' className = 'btn btn-primary'>Submit</button>
						</div>
				</div>
			</form>
			</div>
		);
	}
}

// function mapDispatchToProps (dipatch) {
// 	return bindActionCreators({fetchWeather},dipatch);}

// function mapDispatchToProps (dipatch) {
// 	return bindActionCreators({helpers},dipatch);}

function mapStateToProps({weather}) {
	return {weather : weather};  // {weather} === {weather : weather}
}

export default connect(mapStateToProps, {fetchWeather})(SearchBar);

const DEFAULTS = {
  logLevel: 0,
  outputFormat: 'html'
};

function processContent(options) {
  options = Object.assign({}, DEFAULTS, options);
  console.log(options);
  // ...
}

function processContent(options = DEFAULTS) {
  console.log(options);
  // ...
}

