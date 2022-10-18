import React, { Component } from 'react'
import { connect } from 'react-redux'

// C1: lưu giá trị từ form ở state của component
// C2: lưu giá trị từ form ở redux

class FormDangKy extends Component {

    // chứa các giá trị từ form, chứa nội dung error
    state = {
        values: {
            taiKhoan: '',
            hoTen: '',
            matKhau: '',
            sdt: '',
            email: '',
            maLoaiND: 'khachHang'
        },
        errors: {
            taiKhoan: '',
            hoTen: '',
            matKhau: '',
            sdt: '',
            email: '',
            maLoaiND: ''
        }
    }
    

    inputChange = (event) => {
        let { value, name } = event.target
        // obj literal
        let newValues = {...this.state.values,[name]:value}
        console.log(newValues);

        let newErrors = {...this.state.errors}
        let errorMsg = "";
        if (value.trim() == "") {
            // lỗi
            errorMsg = name + " không để trống !";
        }
        //obj.tenthuoctinh, obj[tenthuoctinh]
        newErrors[name] = errorMsg

        
        // lấy giá trị của typeInput, rồi mới kiểm tra được xem có đúng ko
        let typeVal = event.target.getAttribute("typeInput");
        if (typeVal == "email") {
            // kiểm tra email
            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

            if(!regex.test(value)) {
                // không hợp lệ
                errorMsg = "Email không đúng định dạng!";
            }
        }

        this.setState({
            values: newValues,
            errors: newErrors
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let isValid = true;
        // kiểm tra các dữ liệu đã hợp lệ (các lỗi còn không)
        for (const key in this.state.errors) {
            if(this.state.errors[key] !== ""){
                // còn lỗi
                isValid = false;
                break;
            }
        }
        // kiểm tra dữ liệu rỗng khi không change value
        for (const key in this.state.values) {
            if(this.state.values[key] !== ""){
                // giá trị bị rỗng
                isValid = false;
                break;
            }
        }
        if(!isValid) {
            // ko hợp lệ thì thông báo
            alert('Dữ liệu không hợp lệ!');
            // dừng hàm
            return;
        }
        
        // đẩy dữ liệu người dùng lên redux
        let action = {
            type: "THEM_ND",
            nguoiDung: this.state.values
        }
        this.props.dispatch(action)
    }

      static getDerivedStateFromProps(newProps, currentState) {

    //Trường hợp chỉnh sửa gõ trên form thì cần đổi state của component => lấy this.state

    //Trường hợp xem thông tin thì lên redux lấy nguoiDungChiTiet về luuw vào props
    //=> đem từ props lưu và state
    console.log("newProps",newProps);
    console.log("currentState",currentState);
    if(newProps.nguoiDungChiTiet.taiKhoan !== currentState.values.taiKhoan){
        //?cần xem thông tin chi tiết
        //return state mới

        return {
            ...currentState,
            values:newProps.nguoiDungChiTiet //lấy nguoiDungChiTiet lưu vào state
        }
    }

    //? ngược lại, cập nhật người dùng
    return currentState;// lấy dữ liệu từ form onChange lưu vào state (inputChange)
  }
  componentWillReceiveProps(newProps){
    // chỉ chạy khi props thay đổi => xem chi tiết
    this.setState({
        values: newProps.nguoiDungChiTiet
    })
  }
    render() {
        console.log(this.props);
        let {taiKhoan, hoTen} = this.props.nguoiDungChiTiet;
        return (
            <form onSubmit={(event) => {
                this.handleSubmit(event);
            }}>
                <div className="row">
                    <div className="col-6 mb-5">
                        <input onChange={(event) => {
                            this.inputChange(event)
                        }} value={taiKhoan} type="text" name='taiKhoan' className="form-control" placeholder="Tài khoản" />
                        <p className='text-danger'>{this.state.errors.taiKhoan}</p>
                    </div>
                    <div className="col-6 mb-5">
                        <input onChange={(event) => {
                            this.inputChange(event)
                        }} value={hoTen} type="text" name='hoTen' className="form-control" placeholder="Họ Tên" />
                        <p className='text-danger'>{this.state.errors.hoTen}</p>
                    </div>
                    <div className="col-6 mb-5">
                        <input onChange={(event) => {
                            this.inputChange(event)
                        }} type="password" name='matKhau' className="form-control" placeholder="Mật Khẩu" />
                        <p className='text-danger'>{this.state.errors.matKhau}</p>
                    </div>
                    <div className="col-6 mb-5">
                        <input onChange={(event) => {
                            this.inputChange(event)
                        }} type="text" name='sdt' className="form-control" placeholder="Điện thoại" />
                        <p className='text-danger'>{this.state.errors.sdt}</p>
                    </div>
                    <div className="col-6 mb-5">
                        <input onChange={(event) => {
                            this.inputChange(event)
                        }} typeinput="email" type="text" name='email' className="form-control" placeholder="Email" />
                        <p className='text-danger'>{this.state.errors.email}</p>
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

const mapStateToProps = (rootReducer) => {
    return {
        nguoiDungChiTiet: rootReducer.QLNDReducer.nguoiDungChiTiet
    }
}

export default connect(mapStateToProps)(FormDangKy)
