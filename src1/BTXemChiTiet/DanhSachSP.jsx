import React, { Component } from 'react'
import SanPham from './SanPham'

export default class DanhSachSP extends Component {
  
  renderPhoneList = () => {
    return this.props.phoneList.map((phone) => {

        return <div className="col-4" key={`phone-${phone.maSP}`}>
              <SanPham showDetail={this.props.showDetail} phone={phone}/>
        </div>
    })
}
  
  render() {
    return (
      <div className="row">
        {this.renderPhoneList()}
      </div>
    )
  }
}
