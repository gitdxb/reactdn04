// rxr
const initialState = {
  mangND: [
    { taiKhoan: 'user1', hoTen: 'Nguyen Thi Khach Hang', matKhau: '12345', sdt: '090000000', email: 'email1@gmail.com', maLoaiND: 'khachHang' },
    { taiKhoan: 'user2', hoTen: 'Nguyen Thi Khach Hang', matKhau: '12345', sdt: '090000000', email: 'email1@gmail.com', maLoaiND: 'khachHang' },
    { taiKhoan: 'user3', hoTen: 'Nguyen Thi Khach Hang', matKhau: '12345', sdt: '090000000', email: 'email1@gmail.com', maLoaiND: 'khachHang' },
  ],
  nguoiDungChiTiet: {
    taiKhoan: 'user3', 
    hoTen: 'người dùng 3', 
    matKhau: '123456789', 
    sdt: '09000XXXX', 
    email: 'email4@gmail.com', 
    maLoaiND: 'quanTri' 
  }
}

export const QLNDReducer = (state = initialState, action) => {
  switch (action.type) {

    case "THEM_ND":
      console.log(action.nguoiDung);

      // state.mangND.push(action.nguoiDung);
      // copy mảng cũ sang mảng mới và thêm phần tử cho mảng
      // => lưu mảng mới vào lại biến mảng cũ
      state.mangND = [...state.mangND, action.nguoiDung]
      return { ...state }

    case "XOA_ND":
      console.log(action.taiKhoanXoa);

      // lọc mảng chỉ giữ lại các tài khoản ko xoá
      // => sau đó lưu mảng mới đã lọc vào biến mảng ban đầu // đổi địa chỉ ô nhớ
      state.mangND = state.mangND.filter((nd) => {
        return nd.taiKhoan !== action.taiKhoanXoa
      })
      return { ...state }

      case "XEM_CT":
        console.log(action.ndChiTiet);
        state.nguoiDungChiTiet = action.ndChiTiet;
      return {...state}
    default:
      return state
  }
}
