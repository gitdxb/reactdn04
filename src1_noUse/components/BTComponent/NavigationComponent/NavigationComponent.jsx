import React, { Component, Fragment } from 'react'

export default class NavigationComponent extends Component {
  
  render() {
    return (
      // Fragment: giúp đúng cú pháp render thẻ của react, và không tạo trên UI bất kỳ thẻ dư thừa nào
      <Fragment>
        <h2>NavigationComponent</h2>
        <ul>
          <li>item1</li>
          <li>item2</li>
        </ul>
      </Fragment>
    )
  }
}

        {/* <div className="col-4 navi">
        <h2>NavigationComponent</h2>
                <ul>
                  <li>item1</li>
                  <li>item2</li>
                </ul>
        </div> */}