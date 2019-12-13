import axios from 'axios';

export const FETCH_CURRENT_COMIC_START = "FETCH_COMIC_START";
export const FETCH_CURRENT_COMIC_SUCCESS = "FETCH_COMIC_SUCCESS";
export const FETCH_CURRENT_COMIC_FAILURE = "FETCH_COMIC_FAILURE"


export const getCurrentComic = () => dispatch => {
    dispatch({type: FETCH_CURRENT_COMIC_START})
    axios   
        .get('https://cors-anywhere.herokuapp.com/https://xkcd.com/info.0.json')
        .then(res => {
            console.log(res)
            dispatch({ type: FETCH_CURRENT_COMIC_SUCCESS, payload: res.data})
        })
        .catch(err => {
            // console.log('error in the getComic axios')
            dispatch({type: FETCH_CURRENT_COMIC_FAILURE, payload: err.res})
        })
}