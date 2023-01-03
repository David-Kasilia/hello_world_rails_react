import axios from 'axios';
import { api } from '../api/api'


// Actions
const FETCH_GREETINGS = 'greetings/FETCH_GREETINGS';

// Initial State
const initialState = {
    greetings: [],
};

// Action Creation
export const fetchGreetings = (payload) => ({
    type: FETCH_GREETINGS,
    payload,
});

// Fetch Greetings
export const fetchGreetingsAsync = () => async (dispatch) => {
    axios.get(api).then((response) => {
        const { data } = response
        dispatch({type: FETCH_GREETINGS, payload: data[0]});
    })

    // const response = await axios.get(api);
    // const data = await response.data;
    // dispatch(fetchGreetings(data));
};

// Reducer
const greetingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GREETINGS:
            return {
                ...state,
                greetings: action.payload,
            };
        default: 
            return state;
    }
};

export default greetingsReducer;