import React, { Component } from 'react'

export default class DemoArray extends Component {

    productList = [
        { id: 1, name: "Black car", url: "./img/products/black-car.jpg", price: 6000 },
        { id: 2, name: "Red car", url: "./img/products/red-car.jpg", price: 5000 },
        { id: 3, name: "silver car", url: "./img/products/silver-car.jpg", price: 4000 },
        { id: 4, name: "steel car", url: "./img/products/steel-car.jpg", price: 3000 }
    ]

    renderCar = () => {
        // let content ="";
        let content = [];//  [<tr></tr>,<tr></tr>]
        for (let i = 0; i < this.productList.length; i++) {
            //    content +="<tr></tr><tr></tr>"
            let { name, price, url } = this.productList[i];
            let trObj = <tr>
                <td>{name}</td>
                <td>
                    <img style={{ width: "20px", height: "20px" }} src={url} alt="" />
                </td>
                <td>{price}</td>
            </tr>
            content.push(trObj);
            
        }

        // dom tới tbody => innerHTML = content
        return content;
    }

    renderCarMap = () => {
        // let content = [];
        
        //trả kết quả ra khỏi hàm renderCarMap
        return this.productList.map((car) => {
            let { name, price, url } = car;
            //trả về 1 cái mảng mới, return trong map chỉ dừng khi hết mảng
            //trả kết quả ra ngoài map
            return <tr>
                <td>{name}</td>
                <td>
                    <img style={{ width: "20px", height: "20px" }} src={url} alt="" />
                </td>
                <td>{price}</td>
            </tr>
        })

        // return content;
    }

    render() {
        return (
            <div className='container'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Hình</th>
                            <th scope="col">Giá</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {this.renderCar()} */}
                        {this.renderCarMap()}
                    </tbody>
                </table>

            </div>
        )
    }
}
