import React from 'react';
// import ProgressBar from './ProgressBar.js'
import './TextInput.css';


export default class TweetInput extends React.Component{
  
  // constructor(){
  //   super()
  //   this.state =  {
  //     content: ''

  //   }
  // }
  
  // handleChange = (event) => {

  //   console.log(event.target.value)
  //   this.setState({
  //     content: event.target.value
  //   })

  
  // }
  
  render(){

    // const content = this.state.content
    // const isDisabled = content.length === 0 || content.length > 140
    // const classList = content.length > 120 ? "warning" : "" //ternary operator
    
    // let percentage = content.length / 1.4 

    //   if ( percentage > 100){
    //       percentage = 100
    //   }
    
    // const barStyle = {width: `${percentage}%`}

    return (
      <textarea placeholder="add text here..">

      </textarea>
      // {/* <div className="input">
      //     {/* <ProgressBar percentage={percentage}/>

      //     <textarea onChange={this.handleChange}></textarea>

      //     <footer>
      //       <div className={classList}>{140 - this.state.content.length}</div>
      //       <button disabled={isDisabled}>post</button>
      //     </footer> */}

      // // {/* </div> */} */}
    )
  }
}