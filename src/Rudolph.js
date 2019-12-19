import React from 'react';
import './Rudolph.css';

export default class Rudolph extends React.Component{


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
    target.className = 'rudolph'
    console.log('dragEnd')
    
  }

  render(){
    return (
      <div className="rudolph" onDragStart={this.dragStart} onDragEnd={this.dragEnd} draggable="true">
        {/* <img src={Red_Ball}></img> */}
      </div>
    )
  
  }
}