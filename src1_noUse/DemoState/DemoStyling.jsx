import React, { Component } from 'react';

// code css ứng dụng toàn web
import './demoStyling.css';

// import loại file module css
import styleModule from "./StyleComponent.module.css";

export default class DemoStyling extends Component {
  render() {
    let styleObj = {
        color:"red",
        backgroundColor: "yellow"
    }
    return (
      <div>
        {/* External css */}
        <p className="demoCSS">Demo Styling</p>

        {/* inline css */}
        <p style={styleObj}>Inline css 1</p>
        <p style={{fontSize:"40px"}}>Inline css 2</p>
        <p className={styleModule.styleFontSize}>demo module CSS</p>
        <p className={`${styleModule.styleFontSize} ${styleModule["color-red"]}`}>demo nhiều class name</p>
      </div>
    )
  }
}
