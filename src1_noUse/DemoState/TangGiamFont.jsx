import React, { Component } from 'react'

export default class TangGiamFont extends Component {
  
  // fontState = 16; 

  state = {
    fontState: 16
  }

  changeFontSize = (num) => {
    this.setState({
      fontState: this.state.fontState + num
    })
  }
  render() {
    return (
      <div className="container">
        <h2>TangGiamFont</h2>
        <button onClick={() => {

          this.changeFontSize(1);

        }} className='btn btn-success'>+</button>
        {/* <span style={{fontSize:"16px"}}>Text cần tăng giảm font</span> */}
        <span style={{fontSize:`${this.state.fontState}px`}}>Text cần tăng giảm font</span>
        <button onClick={() => {
          
          this.changeFontSize(-1);
          
        }} className="btn btn-danger">-</button>
      </div>
    )
  }
}
