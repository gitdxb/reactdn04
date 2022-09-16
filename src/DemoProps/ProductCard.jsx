import React, { Component } from "react";

export default class ProductCard extends Component {
  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={this.props.url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <p className="card-text">{this.props.price}$</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}
