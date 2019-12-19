import React from 'react';
import './Snowman.css';

export default class Snowman extends React.Component{


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
    target.className = 'snowman'
    console.log('dragEnd')
    
  }

  render(){
    return (
      <div className="snowman" onDragStart={this.dragStart} onDragEnd={this.dragEnd} draggable="true">
        {/* <img src={Red_Ball}></img> */}
      </div>
    )
  
  }
}