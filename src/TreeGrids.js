import React from 'react';
import './TreeGrids.css';


export default class TreeGrids extends React.Component{

  dragOver = event => {
    event.preventDefault();
  }

  dragEnter = event => {
    // event.target.className += ' hovered'
    console.log("hovered")
  }

  dragLeave = event => {
    // event.target.className = ''
    console.log('leave')
  }

  dragDrop = event => {
    event.preventDefault()
    const elemClassName = event.dataTransfer.getData('className')
    event.target.className = `${elemClassName}`
    // const decor = document.querySelector(`#${elem_id}`)
    console.log (`${elemClassName}`)
    // event.target.appendChild(decor)
 
  }

  onClick = event => {
    event.target.className = ""
  }

  render(){

      const grids = []
  
      for (let i = 0; i <117; i++){
        grids.push(<div id = {i + 1} 
          className="" 
          onDragOver={this.dragOver}
          onDragEnter={this.dragEnter}
          onDragLeave={this.dragLeave}
          onDrop={this.dragDrop}
          onClick={this.onClick}>
         
          </div>)
      }

    return(

      <div className="TreeArea">
        {grids}
      </div>

    )
  }

  
}