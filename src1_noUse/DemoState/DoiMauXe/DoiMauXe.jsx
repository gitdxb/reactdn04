import React, { Component } from "react";

export default class DoiMauXe extends Component {
  
//   imgURL = './img/black-car.jpg';

state = {
    imgURL: "./img/black-car.jpg"
}

changeColor = (color) => {
    this.setState({
        imgURL:`./img/${color}-car.jpg`
    })
}

render() {
return (
    <div className="container">
    <h2>DoiMauXe</h2>
    <div className="row">
        <div className="col-8">
        <img className="img-fluid" src={this.state.imgURL} alt="" />
        </div>
        <div className="col-4">
        <ul class="nav flex-column">
            <li class="nav-item">
            <button onClick={() => {
                this.changeColor("black");
            }} className="btn btn-dark">Black</button>
            </li>
            <li class="nav-item">
            <button onClick={() => {
                this.changeColor("red");
            }} className="btn btn-danger">Red</button>
            </li>
            <li class="nav-item">
            <button onClick={() => {
                this.changeColor("silver");
            }} className="btn btn-light">Silver</button>
            </li>
            <li class="nav-item">
            <button onClick={() => {
                this.changeColor("steel");
            }} className="btn btn-secondary">Steel</button>
            </li>
        </ul>
        </div>
    </div>
    </div>
);
}
}

