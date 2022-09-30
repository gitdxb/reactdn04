import React, { Component } from "react";

export default class DemoState extends Component {
  // Tạo 1 biến chứa trạng thái đăng nhập
  // Tạo hàm ktra khi click button login
  // Kiểm tra nếu là true -> đã đăng nhập, header hiển thị username
  // Ngc lại hiển thị button login

  //isLogin = false; // false chưa đăng nhập // thuộc tính, k phải biến
    //? Khi dùng State chuyển giá trị cần đổi vào state, giá trị k cần thay đổi thì k lưu vào state

    state = {
        isLogin:false
    }
  // phương thức kiểm tra đăng nhập
  checkLogin = () => {
    if (this.state.isLogin) {
        return <p className="text-white">Nguyễn Thị Khách Hàng</p>
    }

    return <button onClick={() => {
        //alert("hi");
        // click đổi isLogin -> true -> UI reload và hiển thị username
        
        // để đổi đc giá trị và render lại UI khi giá trị thay đổi -> dùng State
        // xét lại giá trị cho state
        this.setState({
            isLogin:true
        });

    }} className="btn btn-success">Login</button>
  }

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-dark bg-dark">
          <span className="navbar-brand mb-0 h1">Navbar</span>
          <div>
            {/* // hiển thị button login hoặc username */}
            {this.checkLogin()}
          </div>
        </nav>
      </div>
    );
  }
}
