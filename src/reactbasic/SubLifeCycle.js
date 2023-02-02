import React, { Component } from 'react'

export default class SubLifeCycle extends Component {

  componentWillUnmount() {
    this.props.ubahmakanan("sate")
  }
  render() {
    return (
      <div>
        <h2>Componen Sub LifeCycle</h2>
      </div>
    )
  }
}
