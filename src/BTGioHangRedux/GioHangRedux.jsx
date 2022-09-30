import React, { Component } from 'react'

import { connect } from 'react-redux'

class GioHangRedux extends Component {

  renderCart = () => {
    return this.props.gioHang.map((spGH) => {
      return <tr key={`cart-${spGH.maSP}`}>
        <td>{spGH.maSP}</td>
        <td>
          <img style={{ width: "40px" }} src={spGH.hinhAnh} alt="" />
        </td>
        <td>
          {spGH.tenSP}
        </td>
        <td>
          <button onClick={() => {
            this.props.changeSL(spGH.maSP, 1);
          }} className='btn btn-success'>+</button>
          <span>{spGH.soLuong}</span>
          <button onClick={() => {
            this.props.changeSL(spGH.maSP, -1);
          }} className='btn btn-danger'>-</button>
        </td>
        <td>{spGH.giaBan.toLocaleString()}</td>
        <td>{(spGH.soLuong * spGH.giaBan).toLocaleString()}</td>
        <td>
          <button onClick={() => {
            // Cách 1: sử dụng hàm dispatch của redux
            // let action = {
            //   type: "XOA_GIO_HANG",
            //   maSPXoa:spGH.maSP
            // }

            // this.props.dispatch(action);


            //Cách 2: 
            this.props.xoaSP(spGH.maSP)

          }} className='btn btn-danger'>Xóa</button>
        </td>
      </tr>
    })
  }


  render() {
    console.log(this.props)
    return (
      <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã</th>
                    <th>Hình ảnh</th>
                    <th>Tên</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.renderCart()}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    )
  }
}






//Tạo hàm lấy giá trị state(reducer) từ store của redux
//mapStateToProps => đem state từ redux lưu xuống props của component
const mapStateToProps = (rootReducer) => {

  //lưu state vào props của component
  return {
    gioHang: rootReducer.gioHangReducer
  }
}


// Cách 2: sử dung hàm định nghĩa lại tên của dispatch
// truyền tham số dispatch (this.props.dispatch) vào hàm

const mapDispatchToProps = (dispatch) => {
  //return vào props 1 hàm dispatch mới
  return {
    //tên hàm mới của dispatch
    xoaSP: (maSP) => {
      let action = {
        type: "XOA_GIO_HANG",
        maSPXoa: maSP
      }

      //tham số dispatch được truyền vào hàm mapDispatchToProps
      dispatch(action);
    },
    changeSL: (maSP, sl) => {
      //đổi số lượng
      let action = {
        type: "DOI_SO_LUONG",
        maSPDoi: maSP,
        soLuong: sl
      }
      dispatch(action)
    }
  }
}
//connect tạo ra 1 loại component mới bao gồm tính năng của Class component react + Redux
//!mapDispatchToProps phải truyền vào vị trí tham số thứ 2 của connect (nằm sau mapStateToProps)
//!nếu không có mapStateToProps thì tham số đầu để là null => connect(null,mapDispatchToProps)
const ComponentGioHangRedux = connect(mapStateToProps, mapDispatchToProps)(GioHangRedux);

export default ComponentGioHangRedux;