import {FETCH_COMIC_START} from '../actions';

const initialState = {
    comic: null, 
    isFetching: false, 
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COMIC_START:
            return {
                ...state,
                isFetching: true,
                error: action.payload
            }
        default: 
            return state;
    }
}