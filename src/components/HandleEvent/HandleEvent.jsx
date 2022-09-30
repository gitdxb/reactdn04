import React, { Component } from 'react'

export default class HandleEvent extends Component {

    showName = () => {
        alert("Hello Nguyễn Thị Khách Hàng")
    }


    showName2 = (name) => {
        // truyền biến vào chuỗi string
        alert(`Hello ${name}`);
    }

    // document.getElementById("heading1").onclick = showName;
    // document.getElementById("heading1").onclick = function(){
    //     showName2(name);
    //     console.log(first)
    //     console.log(first)
    // };
    render() {
        return (
            <div className='container py-5'>
                {/* chờ người dùng click button mới chạy hàm => không có dâu tròn */}
                {/* {}: truyền dữ liệu vào JSX */}
                <button onClick={this.showName} className='btn btn-danger'>Click</button>

                {/* C1: bind() */}
                {/* <button onClick={this.showName2.bind(this,"Nguyễn Thị Khách Hàng")} className='btn btn-info'>Click có tham số</button> */}
               
                {/* C2: hàm ẩn danh */}
                <button onClick={() => { 
                        this.showName2("Nguyễn Thị Khách Hàng");
                        console.log("code 2");

                 }} className='btn btn-info'>Click có tham số</button> 

            </div>
        )
    }
}




// function showName2(name){
//     return function (){
//         console.log(name);
//     }
// }

// let result = showName2()();
// result()

