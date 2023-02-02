import React, { Component } from 'react'
import Operan from './Operan';

export default class StateProps extends Component {
    constructor (props){
        super(props);
        this.state = {
            makanan : "Mie ayam"
        }
    }

    gantiMakanan = (new_makanan) => {
        this.setState({
            makanan: new_makanan
        })
    }
  render() {
    return (
      <div>
            <h2>{this.state.makanan}</h2>
            <button onClick={() => this.gantiMakanan("Sate")}>Ganti Makanan</button>
            <Operan makanan = {this.state.makanan} gantiMakanan={this.gantiMakanan}/>
      </div>
    )
  }
}
 