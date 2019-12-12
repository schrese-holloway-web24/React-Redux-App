import React from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';
//actions
import {getComic} from '../actions';

const Comic = props => {
    console.log('props from Comic file', props)
    return (
        <div>
            <h1>XKCD is the Future, and the Future is NOW!</h1>
            {!props.comic && !props.isFetching && 
                <p>Click to get the current comic!</p>
            }
            {props.isFetching && (
            <Loader 
                type="ThreeDots" 
                color="#somecolor" 
                height={80} 
                width={80} />
            
            ) }
            {props.comic && <img src = {props.comic.img} alt = {props.comic.alt} />}
            <button onClick = {props.getComic}>Current XKCD Comic!</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        comic: state.comic, 
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {getComic})(Comic);