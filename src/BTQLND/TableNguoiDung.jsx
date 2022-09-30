import React, { Component } from 'react'

export default class TableNguoiDung extends Component {
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
                    </tbody>
                </table>
            </div>
        )
    }
}
