import React, { Component } from "react";

export default class DemoArray extends Component {
  productList = [
    { id: 1, name: "Black car", url: "./img/black-car.jpg", price: 6000 },
    { id: 2, name: "Red car", url: "./img/red-car.jpg", price: 5000 },
    { id: 3, name: "Silver car", url: "./img/silver-car.jpg", price: 4000 },
    { id: 4, name: "Steel car", url: "./img/steel-car.jpg", price: 3000 },
  ]
  
  renderCar = () => {
    let content = []; //[<tr></tr>,<tr></tr>]
    for (let i = 0; i < this.productList.length; i++) {
        let {name, price, url} = this.productList[i];
        let trObj = <tr>
            <td>{name}</td>
            <td>
                <img style={{width:"60px", height:"40px"}} src={url} alt="" />
            </td>
            <td>{price}</td>
        </tr>
        content.push(trObj);
    }

    return content;

  }

  renderCarMap = () => {
    let content = [];
    return this.productList.map((car) => {
        let {name, price, url} = car;
        return <tr>
            <td>{name}</td>
            <td>
                <img style={{width:"60px", height:"40px"}} src={url} alt="" />
            </td>
            <td>{price}</td>
        </tr>
    })
  }

  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Img</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
                {/* {this.renderCar()} */}
                {this.renderCarMap()}
          </tbody>
        </table>
      </div>
    );
  }
}
