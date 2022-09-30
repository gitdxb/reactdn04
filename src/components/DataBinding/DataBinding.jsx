import React, { Component } from 'react'

export default class DataBinding extends Component {

  // Thuộc tính của class
  foodInfo = {
    name: "Pizza Hải Sản",
    pic: "https://source.unsplash.com/random/?mooncake",
    price: 5000
  }

  renderFood = () => {
    // return "<div></div>" //chuỗi thẻ html

    // trả về đối tượng thẻ JSX
    //! thẻ mở luôn nằm chung hàng với lệnh return
    //! nếu muốn xuống dòng thì dùng dấu () => ở lệnh return của render()
      return <div className="card" >
          <img src={this.foodInfo.pic} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.foodInfo.name}</h5>
            <p className="card-text">{this.foodInfo.price} $</p>
          </div>
      </div>
  }

  render() {

    //biến trong hàm
    let username = "user123";

    return (
      <div className='container'>
        {/* {}: dấu binding dữ liệu */}
        <h1 id='heading1'>Hello {username}</h1>

        <div className="col-4">
          <div className="card" >
            <img src={this.foodInfo.pic} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{this.foodInfo.name}</h5>
              <p className="card-text">{this.foodInfo.price} $</p>
            </div>
          </div>

        </div>

        <div className="col-4">
          {/* binding hàm có return UI, giá trị tính toán */}
              {this.renderFood()}
        </div>


      </div>
    )
  }
}

 // document.getElementById("heading1").innerHTML = "Hello" + username