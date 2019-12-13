import axios from 'axios';

export const FETCH_NEXT_COMIC_START = "FETCH_NEXT_COMIC_START";
export const FETCH_NEXT_COMIC_SUCCESS = "FETCH_NEXT_COMIC_SUCCESS";
export const FETCH_NEXT_COMIC_FAILURE = "FETCH_NEXT_COMIC_FAILURE"


export const getNextComic = () => dispatch => {

    dispatch({type: FETCH_NEXT_COMIC_START})
    axios   
        .get(`https://cors-anywhere.herokuapp.com/http://xkcd.com/${num}/info.0.json`)
        .then(res => {
            console.log(res)
            dispatch({ type: FETCH_NEXT_COMIC_SUCCESS, payload: res.data})
        })
        .catch(err => {
            // console.log('error in the getComic axios')
            dispatch({type: FETCH_NEXT_COMIC_FAILURE, payload: err.res})
        })
}