// import React from 'react';
// import {connect} from 'react-redux';
// import { getNextComic } from '../actions';

// const Buttons = props => {
//     console.log(props)
//     return (
//         <div>
//             <button>Next</button>
//             <button onClick = {props.getNextComic}>Prev</button>
//         </div>
//     )
// }
// const mapStateToProps = state => {
//     return {
//         comic: state.comic, 
//         isFetching: state.isFetching,
//         error: state.error
//     }
// }

// export default connect(mapStateToProps, getNextComic)(Buttons);