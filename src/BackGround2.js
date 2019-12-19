import React from 'react';
import './BackGround2.css';

export default class BackGround2 extends React.Component{


  dragStart = event => {
    const target = event.target
    // target.className += ' hold'
    //setTimeout(() => this.className = 'invisible', 0) 
    event.dataTransfer.setData('className', target.className)
  //   return event.target.className
    console.log('dragStart')
    console.log(target.className)

  }

  dragEnd = event => {
    const target = event.target
    target.className = 'gingerman'
    console.log('dragEnd')
    
  }

  onClick = event => {
    
    let canvasArea = document.querySelector('.CanvasArea')
  
    if (canvasArea.classList.contains('background2')){
      canvasArea.className = 'CanvasArea'
    }
    else{
      canvasArea.className += ' background2'
    }
  
   
  }

  render(){
    return (
      <div className="background-btn2" onClick={this.onClick}>

      </div>
    )
  
  }
}