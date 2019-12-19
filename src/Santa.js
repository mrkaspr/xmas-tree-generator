import React from 'react';
import Red_Ball from './Red_Ball.gif';
import './Santa.css';

export default class Santa extends React.Component{


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
    target.className = 'santa'
    console.log('dragEnd')
    
  }

  render(){
    return (
      <div className="santa" onDragStart={this.dragStart} onDragEnd={this.dragEnd} draggable="true">
        {/* <img src={Red_Ball}></img> */}
      </div>
    )
  
  }
}