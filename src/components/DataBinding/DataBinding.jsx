import React, { Component } from "react";

export default class DataBinding extends Component {
  // thuoc tinh cua class
  foodInfo = {
    name: "Yummy food",
    pic: "https://source.unsplash.com/random/?mooncake",
    price: 100,
  };

  renderFood = () => {
    //! the mo luon nam chung hang voi lenh return, neu muon xuong dong thi dung return ();
    return (
      <div className="card bg-light text-dark">
        <img src={this.foodInfo.pic} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.foodInfo.name}</h5>
          <p className="card-text">{this.foodInfo.price} VND</p>
        </div>
      </div>
    );
  };

  render() {
    let username = "user123";
    return (
      <div className="container">
        <h1>Hello {username}</h1>
        <div className="row">
          <div className="col-4">
            <div className="card bg-light text-dark">
              <img src={this.foodInfo.pic} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{this.foodInfo.name}</h5>
                <p className="card-text">{this.foodInfo.price} VND</p>
              </div>
            </div>
          </div>
          <div className="col-4">{this.renderFood()}</div>
          <div className="col-4">{this.renderFood()}</div>
        </div>
      </div>
    );
  }
}
