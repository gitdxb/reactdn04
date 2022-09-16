import React, { Component } from 'react'

export default class BangCT extends Component {
  render() {
    let {chiTietPhone} = this.props
    return (
        <div className="row">
        <div className="col-4">
          <h3>{chiTietPhone.tenSP}</h3>
          <img className="img-fluid" src={chiTietPhone.hinhAnh} alt="" />
        </div>
        <div className="col-8">
            <h2>Thông số kỹ thuật</h2>
          <table className="table">
            <thead>
              <tr>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Màn hình</td>
                <td>{chiTietPhone.manHinh}</td>
              </tr>
              <tr>
                <td>HĐH</td>
                <td>{chiTietPhone.heDieuHanh}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
