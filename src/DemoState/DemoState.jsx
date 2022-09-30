import React, { Component } from 'react'

export default class DemoState extends Component {

    // Tạo 1 biến chứa trạng thái đăng nhập
    // Tạo hàm kiểm tra khi click button Login => đổi giá trị isLogin sang true
    // Kiểm tra: nếu là true => đã đăng nhập => header hiển thị tên username
    // Ngược lại hiển thị button login

    // isLogin = false; //false chưa đăng nhập

    // Chuyển giá trị cần đổi vào state (thuộc tính có sẵn của RCC)

    state = {
       isLogin:false
    }

    //phương thức kiểm tra đăng nhập
    checkLogin = () => {
        if(this.state.isLogin){
            return <p className='text-white'>Nguyễn Thị Khách Hàng</p>
        }
        // retrun name
        return <button onClick={() => { 
            // alert("hello")
            //click đổi isLogin => true => UI sẽ load lại và hiển thị tên client
            // this.isLogin = true;
            // console.log(this.isLogin);
            // load lại UI
            //this.render();//!hàm render chỉ chạy 1 lần khi load ứng dụng
            // để đổi đc giá trị và render lại UI khi giá trị thay đổi  => State

            // xét giá trị mới cho isLogin (state) và render lại UI
            
            let newState = {
                isLogin:true
            }
            this.setState(newState, () => { 
                //tham số thứ 2 của setState giúp xử lý các nghiệp vụ sau khi state đã được đổi
                console.log("setState", this.state.isLogin);
             });

             //Nếu đặt console bên dưới setState sẽ bị sai kết quả thông báo do bất đồng bộ dữ liệu
             console.log("setState", this.state.isLogin);
             
            // this.setState({
            //     isLogin:true
            // }, () => { 
            //     console.log(this.state.isLogin)
            //  });

            //  this.setState(gia tri moi cua state,ham callback )
         }} className='btn btn-success'>Login</button>
    }

    render() {
        console.log("render",this.state.isLogin)
        return (
            <div className='container'>
                <nav className="navbar navbar-dark bg-dark">
                    <span className="navbar-brand mb-0 h1">Navbar</span>
                    <div>
                        {/* Hiển thị button login hoặc username */}
                        {this.checkLogin()}
                    </div>
                </nav>
            </div>

        )
    }
}
