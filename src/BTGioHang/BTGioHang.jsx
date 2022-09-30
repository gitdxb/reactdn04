import React, { Component } from 'react'
import DanhSachSP from './DanhSachSP'
import GioHang from './GioHang'

export default class BTGioHang extends Component {

    phoneList = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/phone/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/phone/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/phone/applephone.jpg" }
    ]


    //Khai báo state
    state = {
        gioHang: []
    }


    // input: thông tin sp đang được click
    // output: san pham được thêm vào mảng gioHang
    addToCart = (spClick) => {
        console.log(spClick);//chưa có số lượng

        let gioHangMoi = [...this.state.gioHang];
        //Tìm sản phẩm trong giỏ hàng có mã trùng với mã spClick
        //find => trả về đối tượng, findIndex => vị trí phần tử 
        // let spFind =  this.state.gioHang.find( spGH => spClick.maSP === spGH.maSP )
        let spFind = this.state.gioHang.find((spGH) => {
            //điều kiện tìm kiếm
            return spClick.maSP === spGH.maSP;
        })
        //Nếu sản phẩm cần thêm đã tồn tại (dựa vào maSP) trong giỏ hàng => tăng số lượng
        //Ngược lại, thêm 1 hàng sản phẩm mới
        if (spFind) {
            //nếu tìm thấy => đã có trong giỏ hàng
            //soLuong mới = số lượng cũ + 1
            spFind.soLuong = spFind.soLuong + 1;
        } else {
            //copy thuộc tính của spClick và thêm thuộc tính mới soLuong
            let spGHMoi = { ...spClick, soLuong: 1 }
            //gioHangMoi: sản phẩm của giỏ hàng cũ và thêm sản phẩm spGHMoi
            //    gioHangMoi = [...gioHangMoi, spGHMoi]
            gioHangMoi.push(spGHMoi)
        }

        this.setState({
            //lưu vào state mảng giỏ hàng mới (chứa các sp mới thêm)
            gioHang: gioHangMoi
        })
    }

    removeCart = (maXoa) => {
        console.log(maXoa);
        let gioHangCapNhat = [...this.state.gioHang];
        //tìm được vị trí phần tử cần xóa trong giỏ hàng findIndex
        //splice => xóa phần tử theo vị trí
        //tìm ko thấy => trả về -1
        // let indexXoa = gioHangCapNhat.findIndex((spGH) => { 
        //     return spGH.maSP === maXoa;
        //  })

        //  if(indexXoa > -1){
        //     //tìm thấy
        //     gioHangCapNhat.splice(indexXoa,1);
        //  }

        //? lọc ra các sản phẩm có mã khác với sản phẩm cần xóa
        //? filter trả về mảng mới không chứa sản phẩm cần xóa
        gioHangCapNhat = gioHangCapNhat.filter((spGH) => { 
                return spGH.maSP !== maXoa;
         })
         this.setState({
            gioHang:gioHangCapNhat
         })
    }


    changeSL=(maSP,sl)=>{
        let gioHangCapNhat = [...this.state.gioHang];

        let spFind = gioHangCapNhat.find((spGH) => { 
            return spGH.maSP === maSP;
         })

        if(spFind){
            //so luong mới  = so luong cũ + 1 hoặc so luong cũ + (-1)
            spFind.soLuong = spFind.soLuong + sl;

            if(spFind.soLuong < 1){
                alert("Số lượng tối thiểu là 1");
                // 0 - (-1) => 0 + 1 => 1
                // spFind.soLuong -= sl;//rút gọn
                spFind.soLuong = spFind.soLuong - sl;
                
            }

        }
        this.setState({
            gioHang:gioHangCapNhat
        })

    }

    tinhTongSL = () =>{
        //? reduce ((kết quả, từng phần tử, vị trí phần tử)=>{}, giá trị khởi tạo của kết quả ): duyệt mảng, dựa vào công thức tính toàn 
        //return 1 kết quả tính toàn
        // return this.state.gioHang.reduce((tongSL,sanPham,index) => tongSL += sanPham.soLuong, 0);
        
        let tong = this.state.gioHang.reduce((tongSL,sanPham,index) => { 
                //công thức tính toán
                // tongSL(mới) = tongSL(cũ) + sanPham.soLuong
                return tongSL += sanPham.soLuong;
         }, 0);

         return tong.toLocaleString();
    }


    render() {
        return (
            <div className='container'>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <a className="dropdown-item" href="#">Action 1</a>
                                    <a className="dropdown-item" href="#">Action 2</a>
                                </div>
                            </li>
                        </ul>
                        <div className="form-inline my-2 my-lg-0">
                            <p className='text-white'>Giỏ hàng ({this.tinhTongSL()})</p>
                        </div>
                    </div>
                </nav>
               <DanhSachSP addToCart={this.addToCart}  phoneList={this.phoneList}/>
                <GioHang removeCart={this.removeCart} changeSL={this.changeSL} gioHang={this.state.gioHang} />


            </div>
        )
    }
}
