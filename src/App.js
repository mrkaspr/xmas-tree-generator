import React from 'react';
import './App.css';
import RedBall from './RedBall';
import YellowBall from './YellowBall';
// import Grid from './Grid';
import TreeGrids from './TreeGrids';


function App() {
  return (
    <div className="App">

    <div className="Container">
      
      <div className="MenuArea"> 

        {/* <div className="Image"><RedBall /></div>
        <div className="Image"><YellowBall /></div> */}

        <RedBall />
        <YellowBall />
       
      </div>

      <div className="CanvasArea">

        <div className="Canvas">
          
          <div className="TextAreaHelper">
              {/* <h1></h1> */}
          </div>

          <TreeGrids />

        </div>  

      </div>
    
    </div>




      {/* <RedBall />
      <YellowBall /> */}
    </div>
    );
}

export default App;
