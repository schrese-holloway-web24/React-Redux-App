export const FETCH_COMIC_START = "FETCH_COMIC_START";


export const getComic = () => dispatch => {
    dispatch({type: FETCH_COMIC_START})
}