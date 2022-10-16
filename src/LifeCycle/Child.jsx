import React, { Component } from 'react'

export default class Child extends Component {

  constructor(props) {

    super(props)
    this.state = {
    }
    this.checkTime=()=>{
    }
    console.log("constructor child");
  }

  static getDerivedStateFromProps(newProps, currentState) {

    console.log("getDerivedStateFromProps Child");
    return null;
  }

  shouldComponentUpdate(newProps, newState) {
    console.log("shouldComponentUpdate Child");

    // return true => cho phép render lại UI
    // ngược lại false => không render lại UI (những component chứa thông tin ít thay đổi => không render lại - footer )
    // return false

    // render lại theo điều kiện 
    //newProps giá trị mới của props
    console.log("newProps", newProps);
    //this.props giá trị hiện tại của props
    console.log("this.props", this.props);

    if(newProps.like !== this.props.like){
        //có đổi like => render lại UI
        return true;
    }else{
        //giá trị like không đổi => Ko render lại UI
        // number thay đổi không render lại UI
        return false;
    }
   

  }

  render() {
    //this.props được cập nhật giá trị mới
    console.log("this.props render", this.props);
    console.log("render child")
    return (
      <footer>
          <p>footer</p>
      </footer>
    )
  }


  componentDidMount() {

    this.checkTime = setInterval(() => {  
       console.log("Check time sau 1s")
    }, 1000)

    console.log("componentDidMount Child");
  }

  componentDidUpdate(){
    //xử lý các code cần chạy sau khi render được UI
    //ví dụ dùng các thư viện count up, slick carousel để gắn thư viện sau khi UI đã load xong
    console.log("componentDidUpdate child");
  }


  componentWillUnmount(){
    //xử lý nghiệp vụ thông báo cho user trước khi chuyển trang hoặc ẩn component
    //Các API chạy ngầm => thường xuyên cập nhật lấy dữ liệu mới về (5s cập nhật 1 lần)
    //xử lý tắt các API chạy ngầm không cần thiết khi không còn cần dùng component
    clearInterval(this.checkTime);
    console.log("componentWillUnmount");
  }




}