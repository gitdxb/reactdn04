import React, { Component } from 'react'

export default class FormDangKy extends Component {
    render() {
        return (
            <form>
                <div className="row">
                    <div className="col-6 mb-5">
                        <input type="text" name='taiKhoan' className="form-control" placeholder="Tài khoản" />
                    </div>
                    <div className="col-6 mb-5">
                        <input type="text" name='hoTen' className="form-control" placeholder="Họ Tên" />
                    </div>
                    <div className="col-6 mb-5">
                        <input type="password" name='matKhau' className="form-control" placeholder="Mật Khẩu" />
                    </div>
                    <div className="col-6 mb-5">
                        <input type="text" name='sdt' className="form-control" placeholder="Điện thoại" />
                    </div>
                    <div className="col-6 mb-5">
                        <input type="text" name='email' className="form-control" placeholder="Email" />
                    </div>
                    <div className="col-6 mb-5">
                        <select className='form-control' name="" id="">
                            <option value="khachHang">Khách hàng</option>
                            <option value="quanTri">Quản trị</option>
                        </select>
                    </div>
                    <div className="col-12 text-center">
                        <button className='btn btn-success mr-1'>Đăng ký</button>
                        <button className='btn btn-info'>Cập nhật</button>
                    </div>
                </div>
            </form>

        )
    }
}
