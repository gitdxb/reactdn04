// rxr
//giá trị mặc đinh của state
// game: mangXucXac, banChon, tongBan, soBanThang
const initialState = {
    mangXucXac: [
        { hinh: "./img/game/1.png", diem: 1 },
        { hinh: "./img/game/2.png", diem: 2 },
        { hinh: "./img/game/3.png", diem: 3 },
    ],
    banChon: true,
    tongBan: 0,
    soBanThang: 0
}

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case "DAT_CUOC":
            // console.log(action);
            state.banChon = action.datCuoc;

            return { ...state }; //đổi địa chỉ state
        case "LAC_XUC_XAC":
            // Math.floor(Math.random() * 6) + 1;
            // Math.floor(Math.random() * 7);

            let mangNgauNhien = [];//mảng đối tượng xuc xac
            for (let i = 0; i < 3; i++) {
                let matXucXac = Math.floor(Math.random() * 6) + 1;
                let xucxac = {
                    hinh: `./img/game/${matXucXac}.png`,
                    diem: matXucXac
                }
                mangNgauNhien.push(xucxac)
            }

            state.mangXucXac = mangNgauNhien;

            //? tổng điểm >= 11 => Tài ;tổng điểm  < 11 => Xỉu
            let tongDiem = state.mangXucXac.reduce((tong, xucxac, index) => {
                return tong += xucxac.diem;
            }, 0);
            console.log(tongDiem);
            //điều kiện thắng: 
            //TH1: banChon:true(Tài) && tổng điểm >= 11 => win
            //TH2: banChon:false(Xỉu) && tổng điểm < 11 => win
            if ((state.banChon && tongDiem >= 11) || (!state.banChon && tongDiem < 11)) {
                //người chơi thắng
                state.soBanThang += 1;
            }

            state.tongBan += 1;


            return { ...state }
        default:
            return state
    }
}