import React, { Component } from 'react'

export default class DoiMauXe extends Component {

    // imgURL = "./img/products/black-car.jpg";

    state = {
        imgURL: "./img/products/black-car.jpg"
    }

    changeColor = (color) => {
        this.setState({
            imgURL: `./img/products/${color}-car.jpg`
        })
    }

    render() {
        return (
            <div className='container'>
                <h2>DoiMauXe</h2>
                <div className="row">
                    <div className="col-8">
                        <img className='img-fluid' src={this.state.imgURL} alt="" />
                    </div>
                    <div className="col-4">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <button onClick={() => { 
                                    this.changeColor("black");
                                 }} className='btn btn-dark'>Black</button>
                            </li>
                            <li className="nav-item">
                                <button onClick={() => {

                                    this.changeColor("red");

                                }} className='btn btn-danger'>Red</button>
                            </li>
                            <li className="nav-item">
                                <button onClick={() => { 
                                    this.changeColor("silver");
                                 }} className='btn btn-light'>Silver</button>
                            </li>
                            <li className="nav-item">
                                <button onClick={() => { 
                                    this.changeColor("steel");
                                 }} className='btn btn-secondary'>Steel</button>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        )
    }
}
