import React, { Component } from 'react';
//chỉ nên dùng khi import ít hình (từ 2-3 hình trở xuống)
import XucXacImg from "../asset/img/1.png"; 

import "./gameTaiXiu.css";
import KetQua from './KetQua';
import XucXac from './XucXac';

export default class GameTaiXiu extends Component {
  render() {
    return (
      <div className='container-fluid py-5 bgGame'>
        {/* <img style={{width:"50px"}} src={XucXacImg} alt="" /> */}
            <h1 className='text-center'>GAME TÀI XỈU</h1>
            <XucXac/>
            <KetQua/>
            
           
      </div>
    )
  }
}
