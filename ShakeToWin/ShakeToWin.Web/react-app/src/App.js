import { hot } from 'react-hot-loader/root';

import React from 'react';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
      <div id="screen" className="App">
        <div id="grantMotionAccess" class="gameButton" style={{ top: '2rem' }} onclick="grantMotionAccess()">
          <div>Grant Motion Access</div>
        </div>
        <div class="gameButton" style={{ top: '28rem', width: '2rem' }}>
          <div id="player0"></div>
        </div>
        <div class="gameButton" style={{ top: '28rem', width: '2rem', height: '0', left: '5rem', background_color: 'blueviolet' }}>
          <div id="player1"></div>
        </div>
        {/* <div class="gameButton" style="top: 28rem; width: 2rem; height: 0; left: 8rem; background-color: darkblue">
          <div id="player2"></div>
        </div>
        <div class="gameButton" style="top: 28rem; width: 2rem; height: 0; left: 11rem; background-color: indigo">
          <div id="player3"></div>
        </div>
        <div class="gameButton" style="top: 28rem; width: 2rem; height: 0; left: 14rem; background-color: sandybrown">
          <div id="player4"></div>
        </div> */}
      </div>
  );
}

export default hot(App);
