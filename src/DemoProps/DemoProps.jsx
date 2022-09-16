import React, { Component } from "react";
import ProductCard from "./ProductCard";

export default class DemoProps extends Component {

    productObj = {
        id:1,
        name:"iphone 14",
        price:5000,
        url:"https://source.unsplash.com/random/?iphone"
    }
  render() {
    let {id, name, price,url} = this.productObj;
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <ProductCard productName={name}
            price={price} url={url}/>
          </div>
        </div>
      </div>
    );
  }
}
