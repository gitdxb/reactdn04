import React, { Component } from 'react'

export default class ProductCard extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="card">
                <img src={this.props.url} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.props.productName}</h5>
                    <p className="card-text">{this.props.price}$</p>
                </div>
            </div>
        )
    }
}
