import React from 'react';
import './Song1.css';

export default class Song1 extends React.Component{



  onClick = event => {
    
    let iframe = document.querySelector('iframe')
  
    if (iframe.classList.contains('hidden')){
      iframe.className = ''
    }
    else{
      iframe.className += 'hidden'
    }
  
   
  }

  render(){
    return (
      <div className="add-song-btn" onClick={this.onClick}>
        add song
      </div>
    )
  
  }
}