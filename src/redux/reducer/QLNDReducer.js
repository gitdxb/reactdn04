// rxr
const initialState = {
  mangND:[
      {taiKhoan:"user1", hoTen:"Nguyễn Thị Khách hàng", matKhau:"123456",sdt:"09143443", email:"test@gmail.com",maLoaiND:"khachHang"},
      {taiKhoan:"user2", hoTen:"Nguyễn Thị Khách hàng 2", matKhau:"123456",sdt:"09143443", email:"test@gmail.com",maLoaiND:"khachHang"},
  ],
  nguoiDungChiTiet:{
    taiKhoan:"user3", 
    hoTen:"người dùng 3", 
    matKhau:"1234565425",
    sdt:"0914344354352", 
    email:"test123@gmail.com",
    maLoaiND:"quanTri"
  }
}

export const QLNDReducer =  (state = initialState, action) => {
switch (action.type) {
  case "THEM_ND":
    console.log(action.nguoiDung);

      // state.mangND.push(action.nguoiDung);
      // copy mảng cũ sang mảng mới và thêm phần tử cho mảng
      // => lưu mảng mới vào lại biến mảng cũ => đổi địa chỉ ô nhớ
      state.mangND = [...state.mangND,action.nguoiDung]

  return {...state}

  case "XOA_ND":
      console.log(action.taiKhoanXoa);

      //lọc mảng chỉ giữ lại cac tài khoản không xóa
      // => lưu mảng mới đã lọc vào biến mảng ban đầu // đổi đia chỉ

      state.mangND =  state.mangND.filter((nd) => { 
          return nd.taiKhoan !== action.taiKhoanXoa
       })

    return {...state}
  case "XEM_CT":
       console.log(action.ndChiTiet);
        state.nguoiDungChiTiet = action.ndChiTiet;
    return {...state}
default:
  return state
}
}