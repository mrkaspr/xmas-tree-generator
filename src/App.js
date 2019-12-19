import React from 'react';
import './App.css';
import RedBall from './RedBall';
import YellowBall from './YellowBall';
import Santa from './Santa';
import TreeGrids from './TreeGrids';
import Sock from './Sock';
import Snowman from './Snowman';
import SantaBack from './SantaBack';
import GingerMan from './GingerMan';
import Rudolph from './Rudolph';
import TextInput from './TextInput';
import Song1 from './Song1';
import BackGround2 from './BackGround2';


function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="MenuArea"> 
          <RedBall />
          <YellowBall />
          <Santa />
          <Sock />
          <Snowman />
          <SantaBack />
          <GingerMan />
          <Rudolph />
          <Song1 />
          <BackGround2 />
        </div>

        <div className="CanvasArea">
          <div className="Canvas">
            <div className="TextAreaHelper">
                <TextInput />
                <iframe src="https://open.spotify.com/embed/track/3hBXvHLlTHvnbwrPbeoyAj" 
                className = "hidden"
                width="300" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
            <TreeGrids />
          </div>  
        </div>
      
      </div>

    </div>
  );
}

export default App;
