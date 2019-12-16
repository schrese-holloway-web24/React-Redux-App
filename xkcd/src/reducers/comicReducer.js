import {FETCH_COMIC_START, FETCH_COMIC_SUCCESS, FETCH_COMIC_FAILURE, FETCH_CURRENT_COMIC_START, FETCH_CURRENT_COMIC_SUCCESS, FETCH_CURRENT_COMIC_FAILURE, FETCH_NEXT_COMIC_START, FETCH_NEXT_COMIC_SUCCESS, FETCH_NEXT_COMIC_FAILURE} from '../actions';

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
        case FETCH_COMIC_SUCCESS: 
            return {
                ...state, 
                comic: action.payload, 
                isFetching: false,
                error: ''
            }
        case FETCH_COMIC_FAILURE: 
            return {
                ...state, 
                isFetching: false, 
                error: action.payload
            }
        case FETCH_CURRENT_COMIC_START: 
            return {
                ...state,
                isFetching: true,
                error: action.payload
            }
        case FETCH_CURRENT_COMIC_SUCCESS: 
            return {
                ...state, 
                comic: action.payload, 
                isFetching: false,
                error: ''
            }
        case FETCH_CURRENT_COMIC_FAILURE: 
            return {
                ...state, 
                isFetching: false, 
                error: action.payload
            }
            case FETCH_NEXT_COMIC_START: 
            return {
                ...state,
                isFetching: true,
                error: action.payload
            }
        case FETCH_NEXT_COMIC_SUCCESS: 
            return {
                ...state, 
                comic: action.payload, 
                isFetching: false,
                error: ''
            }
        case FETCH_NEXT_COMIC_FAILURE: 
            return {
                ...state, 
                isFetching: false, 
                error: action.payload
            }
        
        default: 
            return state;
    }
}