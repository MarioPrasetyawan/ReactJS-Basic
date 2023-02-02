import React, { Component } from 'react'
import SubLifeCycle from './SubLifeCycle'

export default class LifeCycle extends Component {

    constructor(props) {
        super(props)

        this.state = {
            makanan: "Babi Guling",
            data: {},
            tampilsub : false,
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    data:  json
                })
            })
    }

    ubahmakanan(value) {
        this.setState({
            makanan: value
        })
    }
    render() {
        // console.log("Data :", this.state.data);
        return (
            <div>
                <h2>{this.state.makanan}</h2>
                {this.state.tampilsub && <SubLifeCycle ubahmakanan= {(value) =>this.ubahmakanan(value)}/>}

                <button onClick={() => this.setState({tampilsub: !this.state.tampilsub})}>TOMBOL</button>
            </div>
        )
    }
}
