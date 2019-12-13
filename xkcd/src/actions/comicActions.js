import axios from 'axios';

export const FETCH_COMIC_START = "FETCH_COMIC_START";
export const FETCH_COMIC_SUCCESS = "FETCH_COMIC_SUCCESS";
export const FETCH_COMIC_FAILURE = "FETCH_COMIC_FAILURE"


export const getComic = () => dispatch => {
    const randNum = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min)
    }
    dispatch({type: FETCH_COMIC_START})
    axios   
        .get(`https://cors-anywhere.herokuapp.com/http://xkcd.com/${randNum(0, 2240)}/info.0.json`)
        .then(res => {
            console.log(res)
            dispatch({ type: FETCH_COMIC_SUCCESS, payload: res.data})
        })
        .catch(err => {
            // console.log('error in the getComic axios')
            dispatch({type: FETCH_COMIC_FAILURE, payload: err.res})
        })
}