import React, { Component } from 'react'
import Child from './Child';

export default class LifeCycleParent extends Component {
  
    constructor(props){
        // khởi tạo props, state, thuộc tính của component

        super(props)
        // state là thuộc tính riêng của mỗi component
        this.state ={
            number:0,
            like:0
        }
        console.log("constructor");
    }

    // static: phương thức tĩnh => gọi phương mà không cần thông qua instance (thể hiện của lớp). vidu: SinhVien.TenPhuongThucTinh
    static getDerivedStateFromProps(newProps,currentState){
            //xử lý các code trước khi render UI

            console.log("getDerivedStateFromProps");
            return null;
    }

    shouldComponentUpdate(newProps,newState){
        console.log("shouldComponentUpdate");
        return true
    }

  render() {
    console.log("render")
    return (
      <div className='container'>LifeCycleParent
            <p>{this.state.number}</p>
            <button className='btn btn-danger' onClick={() => { 
                this.setState({
                    number: this.state.number + 1
                })
             }} >+</button>

             <p>{this.state.like}</p>
            <button className='btn btn-danger' onClick={() => { 
                this.setState({
                    like: this.state.like + 1
                })
             }} >tăng like</button>

             {this.state.number > 2 ? "": <Child number={this.state.number}  like={this.state.like} />}

            
      </div>
    )
  }


  componentDidMount(){
    //xử lý các code cần chạy sau khi render được UI

    //ví dụ dùng các thư viện count up, slick carousel để gắn thư viện sau khi UI đã load xong
    console.log("componentDidMount");

  }


  componentDidUpdate(){
    //xử lý các code cần chạy sau khi render được UI
    //ví dụ dùng các thư viện count up, slick carousel để gắn thư viện sau khi UI đã load xong
    console.log("componentDidUpdate");
  }



}