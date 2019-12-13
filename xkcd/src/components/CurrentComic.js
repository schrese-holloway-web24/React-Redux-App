import React, {useState, useEffect} from 'react';
import axios from 'axios';
// import { connect } from 'react-redux';


const CurrentComic = props => {
    const [current, setCurrent] = useState({})

    useEffect(() => {

        axios
            .get('https://cors-anywhere.herokuapp.com/https://xkcd.com/info.0.json')
            .then(res => {
                console.log(res)
                setCurrent(res.data)
            })
            .catch(err => console.log('error in currentComic useEffect', err))
    }, [])

    return (
        <div className = 'comic'>
            <h2>{current.title}</h2>
            <p>{current.month}/{current.day}/{current.year}</p>
            <img src = {current.img} alt = {current.alt}/>

        </div>
    )
}
// const mapStateToProps = state => {
//     return {
//         comic: state.comic, 
//         isFetching: state.isFetching,
//         error: state.error
//     }
// }

// export default connect(mapStateToProps, {getCurrentComic})(CurrentComic);
export default CurrentComic;