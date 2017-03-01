/**
 * Created by lucas on 3/1/17.
 */
import {FETCH_WEATHER} from '../actions/index';

export default function (state = [], action) {

    switch (action.type) {
        case FETCH_WEATHER: {
            console.log([action.payload.data, ...state])
            return [action.payload.data, ...state];
        }
    }

    return state;

}
