import React from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';
//actions
import {getComic, getCurrentComic, getNextComic} from '../actions';

//components
import CurrentComic from './CurrentComic';
// import Buttons from './Buttons';

const Comic = props => {
    console.log('props from Comic file', props.comic)

     

    return (
        <div className = 'comic-container'>
            <div className = 'comic'>
            {!props.comic && !props.isFetching && 
                // <p>Click to get the current comic!</p>
                <CurrentComic />
            }
            {props.isFetching && (
            <Loader 
                type="ThreeDots" 
                color="#somecolor" 
                height={40} 
                width={40} />
            
            ) }
            {props.comic && <h2>{props.comic.title}</h2>}
            {props.comic && <p>{props.comic.month}/{props.comic.day}/{props.comic.year}</p>}
            {props.comic && <img src = {props.comic.img} alt = {props.comic.alt} key = {props.num} />}
            
            </div>
            
            <div className = 'button-container'>
            <button onClick = {props.getComic}>Random Comic</button>
            <button onClick = {props.getCurrentComic}>Current Comic</button>
            {/* <button onClick = {props.getNextComic(num)}>Next</button> */}
            {/* <Buttons /> */}
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

export default connect(mapStateToProps, {getComic, getCurrentComic, getNextComic})(Comic);