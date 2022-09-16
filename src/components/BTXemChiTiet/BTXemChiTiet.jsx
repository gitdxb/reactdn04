import React, { Component } from "react";
import BangCT from "./BangCT";
import DanhSachSP from "./DanhSachSP";
import SanPham from "./SanPham";

export default class BTXemChiTiet extends Component {
    phoneList = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/phone/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/phone/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/phone/applephone.jpg",
    },
  ];

  // lưu 1 đối tượng vào state
  // khai báo giá trị mặc định cho chiTietPhone
  
  

  showDetail = (phone) => {
    console.log(phone);

    this.setState({
        chiTietPhone:phone
    })
  }
  
  state = {
    chiTietPhone: {
        maSP: 1,
        tenSP: "VinSmart Live",
        manHinh: "AMOLED, 6.2, Full HD+",
        heDieuHanh: "Android 9.0 (Pie)",
        cameraTruoc: "20 MP",
        cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
        ram: "4 GB",
        rom: "64 GB",
        giaBan: 5700000,
        hinhAnh: "./img/phone/vsphone.jpg",
      }
  }
  render() {
    let {chiTietPhone} = this.state;
    return (
      <div className="container py-5">
        {/* <div className="row">{this.renderPhoneList()}</div> */}
        <DanhSachSP phoneList={this.phoneList} />
        {/* <div className="row">
          <div className="col-4">
            <h3>{chiTietPhone.tenSP}</h3>
            <img className="img-fluid" src={chiTietPhone.hinhAnh} alt="" />
          </div>
          <div className="col-8">
            <table className="table">
              <thead>
                <tr>
                  <th></th>
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
        </div> */}
        <BangCT chiTietPhone={chiTietPhone} />
      </div>
    );
  }
}
