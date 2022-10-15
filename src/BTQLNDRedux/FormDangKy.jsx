import React, { Component } from 'react'
import { connect } from 'react-redux'


// C2: lưu giá trị từ form ở redux

class FormDangKy extends Component {



    inputChange = (event) => {
        let { value, name } = event.target
        // obj literal
        let newValues = { ...this.props.nguoiDung.values, [name]: value }
        console.log(newValues);

        let newErrors = { ...this.props.nguoiDung.errors }
        let errorMsg = "";
        if (value.trim() == "") {
            // lỗi
            errorMsg = name + " không để trống !";
        }
        //obj.tenthuoctinh, obj[tenthuoctinh]
        newErrors[name] = errorMsg

        // đẩy giá trị từ form, và thông báo lỗi về redux
        let action = {
            type: "HANDLE_CHANGE",
            nguoiDung: {
                values: newValues,
                errors: newErrors
            }
        }
        this.props.dispatch(action);

        // lấy giá trị của typeInput, rồi mới kiểm tra được xem có đúng ko
        let typeVal = event.target.getAttribute("typeInput");
        if (typeVal == "email") {
            // kiểm tra email
            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

            if (!regex.test(value)) {
                // không hợp lệ
                errorMsg = "Email không đúng định dạng!";
            }
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let isValid = true;
        // kiểm tra các dữ liệu đã hợp lệ (các lỗi còn không)
        for (const key in this.props.nguoiDung.errors) {
            if (this.props.nguoiDung.errors[key] !== "") {
                // còn lỗi
                isValid = false;
                break;
            }
        }
        // kiểm tra dữ liệu rỗng khi không change value
        for (const key in this.props.nguoiDung.values) {
            if (this.props.nguoiDung.values[key] !== "") {
                // giá trị bị rỗng
                isValid = false;
                break;
            }
        }
        if (!isValid) {
            // ko hợp lệ thì thông báo
            alert('Dữ liệu không hợp lệ!');
            // dừng hàm
            return;
        }

        // đẩy dữ liệu người dùng lên redux
        let action = {
            type: "THEM_ND",
            nguoiDung: this.props.nguoiDung.values
        }
        this.props.dispatch(action)
    }
    render() {
        console.log(this.props);
        let { taiKhoan, hoTen, matKhau, sdt, email, maLoaiND } = this.props.nguoiDung.values;
        return (
            <form onSubmit={(event) => {
                this.handleSubmit(event);
            }}>
                <div className="row">
                    <div className="col-6 mb-5">
                        <input onChange={(event) => {
                            this.inputChange(event)
                        }} value={taiKhoan} type="text" name='taiKhoan' className="form-control" placeholder="Tài khoản" />
                        <p className='text-danger'>{this.props.nguoiDung.errors.taiKhoan}</p>
                    </div>
                    <div className="col-6 mb-5">
                        <input onChange={(event) => {
                            this.inputChange(event)
                        }} value={hoTen} type="text" name='hoTen' className="form-control" placeholder="Họ Tên" />
                        <p className='text-danger'>{this.props.nguoiDung.errors.hoTen}</p>
                    </div>
                    <div className="col-6 mb-5">
                        <input onChange={(event) => {
                            this.inputChange(event)
                        }} value={matKhau} type="password" name='matKhau' className="form-control" placeholder="Mật Khẩu" />
                        <p className='text-danger'>{this.props.nguoiDung.errors.matKhau}</p>
                    </div>
                    <div className="col-6 mb-5">
                        <input onChange={(event) => {
                            this.inputChange(event)
                        }} value={sdt} type="text" name='sdt' className="form-control" placeholder="Điện thoại" />
                        <p className='text-danger'>{this.props.nguoiDung.errors.sdt}</p>
                    </div>
                    <div className="col-6 mb-5">
                        <input onChange={(event) => {
                            this.inputChange(event)
                        }} value={email} typeinput="email" type="text" name='email' className="form-control" placeholder="Email" />
                        <p className='text-danger'>{this.props.nguoiDung.errors.email}</p>
                    </div>
                    <div className="col-6 mb-5">
                        <select value={maLoaiND} className='form-control' name="" id="">
                            <option value="khachHang">Khách hàng</option>
                            <option value="quanTri">Quản trị</option>
                        </select>
                        <p className='text-danger'>{this.props.nguoiDung.errors.maLoaiND}</p>
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

const mapStateToProps = (rootReducer) => {
    return {
        nguoiDung: rootReducer.QLNDReducer.nguoiDung
    }
}

export default connect(mapStateToProps)(FormDangKy)
