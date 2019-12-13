import React, {useState, useEffect} from 'react';
import axios from 'axios';

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
        <div>
            <p>This is the current comic</p>
            <h2>{current.title}</h2>
            <img src = {current.img} alt = {current.alt}/>

        </div>
    )
}

export default CurrentComic;