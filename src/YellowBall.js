import React from 'react';
import './Yellowball.css';

export default class YellowBall extends React.Component{


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
    target.className = 'yellowball'
    console.log('dragEnd')
    
  }

  render(){
    return (
      <div className="yellowball" onDragStart={this.dragStart} onDragEnd={this.dragEnd} draggable="true">
        {/* <img src={Red_Ball}></img> */}
      </div>
    )
  
  }
}