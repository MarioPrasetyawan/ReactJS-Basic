import React, { Component } from 'react'

export default class Operan extends Component {
  render() {

    const {makanan, gantiMakanan} = this.props;
    return (
      <div>
            <h2>Operan State Menjadi Props : {makanan}</h2>
            <button onClick={() => gantiMakanan("Sate")}>Ganti Makanan</button>
      </div>
    )
  }
}
