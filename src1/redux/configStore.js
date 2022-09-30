// Store: chứa các giá trị cần đổi (state)
import { combineReducers, createStore } from "redux";

import { gioHangReducer } from "./reducer/gioHangReducer";
import { gameReducer } from "./reducer/gameReducer";
//state ở RCC là đối tượng
// state = {
//     giohang: []
// }

// reducer là state lưu trên store redux
//rootReducer: chứa tất các state

// khai báo giá trị mặc định cho state
// const giohang = [
//     {
//         maSP: 1,
//         tenSP: "VinSmart Live",
//         manHinh: "AMOLED, 6.2, Full HD+",
//         heDieuHanh: "Android 9.0 (Pie)",
//         cameraTruoc: "20 MP",
//         cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
//         ram: "4 GB",
//         rom: "64 GB",
//         giaBan: 5700000,
//         hinhAnh: "./img/phone/vsphone.jpg",
//         soLuong: 1
//     }
// ]

const giohang = [];

const rootReducer = combineReducers({
    //khai báo và lưu trữ các state của ứng dụng
    //reducer là 1 hàm trả về state
    //default parameter
    //reducer sẽ nhận tất cả data đẩy lên store 
    // => để phân loại nghiệp vụ cần xử lý 
    // => kiểm tra type của action

    // Object literal
    // gioHangReducer: gioHangReducer
    gioHangReducer,
    gameReducer

    // Code cũ ở dưới, trước khi phân file
    // gioHangReducer: (state = giohang, action) => {
    //     console.log("action: ", action);

    //     switch (action.type) {
    //         case "THEM_GIO_HANG":


    //             // Kiểm tra sản phẩm có tồn tại trong giỏ hàng chưa
    //             let spFind = state.find((sp) => {
    //                 return sp.maSP === action.sanPham.maSP;
    //             });
    //             if (spFind) {
    //                 // có sp
    //                 spFind.soLuong += 1;
    //             } else {
    //                 // tạo sp giỏ hàng
    //                 // spread operator
    //                 let spGH = { ...action.sanPham, soLuong: 1 };
    //                 state.push(spGH);


    //             }

    //             console.log(state);
    //             // return về giá trị mới của state
    //             //? Cơ chế redux là nếu state đổi giá trị thì tự động render lại các component có kết nối đến store
    //             //! Redux đang không nhận biết là state đã đổi giá trị => UI ko render lại
    //             //! immutable tính bất biết => tham trị và tham chiếu
    //             //! => redux sẽ kiểm tra địa chỉ ô nhớ của state nếu địa chỉ ko đổi => giá trị ko đổi => ko render lại UI
    //             //? Giải pháp: lưu vào 1 mảng mới của state (dùng method copy của ES6)
    //             // Chú ý: kiểu dữ liệu của state rất quan trọng, nếu là mảng return mảng, obj thì return obj
    //             return [...state];

    //         case "XOA_GIO_HANG":
    //             // filter trả về mảng mới
    //             let gioHangCapNhat = state.filter((sp) => {
    //                 // trả về mảng  mới chứa sp cần giữ lại
    //                 return sp.maSP !== action.maSPXoa
    //             })

    //             // update về state
    //             // do gioHangCapNhat có địa chỉ mới  => khi gán vào state => state sẽ có địa chỉ mới
    //             state = gioHangCapNhat; // filter() đã return 1 mảng mới
    //             return state;

    //         case "DOI_SO_LUONG":
    //             let spFindDoi = state.find((sp) => {
    //                 return sp.maSP === action.maSPDoi;
    //             })

    //             if (spFindDoi) {
    //                 spFindDoi.soLuong += action.soLuong
    //             }

    //             return [...state];
    //         default:
    //             return state;
    //     }
    // }

})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());