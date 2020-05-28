import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CountdownCircleTimer} from "react-countdown-circle-timer";

function App() {
  return (
         <CountdownCircleTimer
        key={1}
        isPlaying
        duration={10}
        colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000']]}
        onComplete={() => {
          console.log('timer complete');
          return [true, 1000];
        }}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
  );
}

export default App;
