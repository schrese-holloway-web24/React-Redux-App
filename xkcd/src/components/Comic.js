import React from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';
//actions
import {getComic, getCurrentComic} from '../actions';

//components
import CurrentComic from './CurrentComic';

const Comic = props => {
    console.log('props from Comic file', props)

    

    return (
        <div>
            
            {!props.comic && !props.isFetching && 
                // <p>Click to get the current comic!</p>
                <CurrentComic />
            }
            {props.isFetching && (
            <Loader 
                type="ThreeDots" 
                color="#somecolor" 
                height={80} 
                width={80} />
            
            ) }
            {props.comic && <img src = {props.comic.img} alt = {props.comic.alt} />}
            <div>
            <button onClick = {props.getComic}>Random</button>
            <button onClick = {props.getCurrentComic}>Current Comic</button>
            </div>
            
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

export default connect(mapStateToProps, {getComic, getCurrentComic})(Comic);