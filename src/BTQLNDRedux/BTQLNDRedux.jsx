import React, { Component } from 'react'
import FormDangKy from './FormDangKy'
import TableNguoiDung from './TableNguoiDung'

export default class BTQLNDRedux extends Component {
  render() {
    return (
      <div className='container py-5'>
            <h1>Quản Lý Người Dùng</h1>
            <FormDangKy/>
            <TableNguoiDung/>
      </div>
    )
  }
}