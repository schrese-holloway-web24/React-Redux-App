import React from 'react';
import './App.css';

//components
import Comic from './components/Comic';
// import CurrentComic from './components/CurrentComic';

function App(props) {
  console.log('from the appjs', props)
  return (
    <div className="App">
      <h1>XKCD is the Future, and the Future is NOW!</h1>
      <Comic />
      {/* <CurrentComic /> */}
    </div>
  );
}

export default App;
