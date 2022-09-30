import React, { Component } from 'react'

export default class TangGiamFont extends Component {

    // fontState = 16;//number (dễ tăng giảm giá trị)

    state ={
        fontState:16
    }

    changeFontSize = (num) => {
        this.setState({
            fontState: this.state.fontState + num
        })
    }



    render() {
        return (
            <div className='container'>
                <h2>TangGiamFont</h2>
               {/* gọi setState trong sự kiện click của button
                   => gán giá trị mới cho state khi click , render loại UI */}
                <button onClick={() => { 

                    this.changeFontSize(1);

                 }} className='btn btn-success'>+</button>
                {/* <span style={{fontSize:"16px"}}>Text cần tăng giảm</span> */}
                <span style={{fontSize:`${this.state.fontState}px`}}>Text cần tăng giảm</span>
                <button onClick={() => { 
                   
                    this.changeFontSize(-1);

                 }}  className='btn btn-danger'>-</button>
            </div>
        )
    }
}
