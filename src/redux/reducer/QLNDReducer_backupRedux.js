import { findAllByAltText } from "@testing-library/react";

// rxr
const initialState = {
  mangND: [
    { taiKhoan: "user1", hoTen: "Nguyễn Thị Khách hàng", matKhau: "123456", sdt: "09143443", email: "test@gmail.com", maLoaiND: "khachHang" },
    { taiKhoan: "user2", hoTen: "Nguyễn Thị Khách hàng 2", matKhau: "123456", sdt: "09143443", email: "test@gmail.com", maLoaiND: "khachHang" },
  ],
  nguoiDung: {
    values: {
      taiKhoan: "",
      hoTen: "",
      matKhau: "",
      sdt: "",
      email: "",
      maLoaiND: "khachHang"
    },
    errors: {
      taiKhoan: "",
      hoTen: "",
      matKhau: "",
      sdt: "",
      email: "",
      maLoaiND: ""
    }
  }
}

export const QLNDReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HANDLE_CHANGE":
      console.log(action.nguoiDung);
      state.nguoiDung = action.nguoiDung;

      return { ...state }

    case "THEM_ND":
      console.log(action.nguoiDung);

      // state.mangND.push(action.nguoiDung);
      // copy mảng cũ sang mảng mới và thêm phần tử cho mảng
      // => lưu mảng mới vào lại biến mảng cũ => đổi địa chỉ ô nhớ
      state.mangND = [...state.mangND, action.nguoiDung]

      return { ...state }

    case "XOA_ND":
      console.log(action.taiKhoanXoa);

      //lọc mảng chỉ giữ lại cac tài khoản không xóa
      // => lưu mảng mới đã lọc vào biến mảng ban đầu // đổi đia chỉ

      state.mangND = state.mangND.filter((nd) => {
        return nd.taiKhoan !== action.taiKhoanXoa
      })

      return { ...state }
    case "XEM_CT":
      console.log(action.ndChiTiet);
      state.nguoiDung.values = action.ndChiTiet;
      console.log(state.nguoiDung.values);
      state.nguoiDung = { ...state.nguoiDung }; // thay đổi địa chỉ ô nhớ

      return { ...state }
    case "CAP_NHAT":
      console.log(action.nguoiDungCapNhat);
      //Tìm người dùng cần cập nhật trong mảng
      // find, findIndex
      //  let ndFind = state.mangND.find(nd => nd.taiKhoan === action.nguoiDungCapNhat.taiKhoan);

      //  if(ndFind){
      //   // ndFind = action.nguoiDungCapNhat
      //     ndFind.hoTen = action.nguoiDungCapNhat.hoTen
      //  }
      // let ndIndex = state.mangND.findIndex(nd => nd.taiKhoan === action.nguoiDungCapNhat.taiKhoan);
      let ndIndex = state.mangND.findIndex((nd) => {
        return nd.taiKhoan === action.nguoiDungCapNhat.taiKhoan
      });

      if (ndIndex !== -1) {
        //tìm thấy
        state.mangND[ndIndex] = action.nguoiDungCapNhat;
      }

      console.log(state.mangND[ndIndex]);
      state.mangND = [...state.mangND];

      return { ...state }
    default:
      return state
  }
}