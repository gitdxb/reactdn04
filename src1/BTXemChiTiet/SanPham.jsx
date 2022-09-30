import React, { Component } from 'react'

export default class SanPham extends Component {
  render() {
    let {phone,showDetail} = this.props;
    // let {hinhAnh} = this.props.phone;
    return (
      <div className="card">
        <img className="card-img-top" src={phone.hinhAnh} alt="" />
        <div className="card-body">
          <h4 className="card-title">{phone.tenSP}</h4>
          <p className="card-text">{phone.giaBan}</p>
          <button onClick={() => {
            // this.props.showDetail()
            showDetail(phone)
          }} className='btn btn-success'>Xem Chi Tiết</button>
        </div>
      </div>
    )
  }
}
