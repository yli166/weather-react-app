import {STATE_CODE} from '../actions/index';

export default function (state = [], action) {

	switch (action.type) {
		case STATE_CODE :
		return action.payload;
	}

	// console.log('statecode received', action.type);
	return state;
}