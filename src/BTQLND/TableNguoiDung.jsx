import React, { Component } from 'react'
import { connect } from 'react-redux'

class TableNguoiDung extends Component {
    renderMangND = () => {
        let stt = 1;
        return this.props.mangND.map((nd) => { 
            return <tr key={nd.taiKhoan}>
                <td>{stt++}</td>
                <td>{nd.taiKhoan}</td>
                <td>{nd.hoTen}</td>
                <td>{nd.matKhau}</td>
                <td>{nd.sdt}</td>
                <td>{nd.email}</td>
                <td>{nd.taiKhoan}</td>
                <td>{nd.maLoaiND}</td>
                <td>
                    <button className="btn btn-danger mr-1">Xoá</button>
                    <button className="btn btn-info">Xem</button>
                </td>
            </tr>
         })
    }
    render() {
        return (
            <div className="py-5">
                <table className="table">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tài khoản</th>
                            <th>Họ tên</th>
                            <th>Mật khẩu</th>
                            <th>SĐT</th>
                            <th>Email</th>
                            <th>Loại ND</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderMangND()}
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = (rootReducer) => {
    return {
        mangND: rootReducer.QLNDReducer.mangND
    }
}
export default connect(mapStateToProps)(TableNguoiDung);