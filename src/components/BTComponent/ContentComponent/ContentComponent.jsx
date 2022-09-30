// rcc
import React, { Component } from 'react'
import CardRCC from '../../CardRCC/CardRCC'

export default class ContentComponent extends Component {
  render() {
    return (
      <div className="col-8 content">
        <h2>ContentComponent</h2>
        <div className="row">
          <CardRCC />
          <CardRCC />
          <CardRCC />
          <CardRCC />
        </div>
      </div>
    )
  }
}
