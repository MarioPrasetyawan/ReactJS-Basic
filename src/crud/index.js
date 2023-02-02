import React, { Component } from 'react'
import Formulir from './Formulir'

import NavbarComponent from './NavbarComponent'
import Tabel from './Tabel'

export default class Crud extends Component {

    constructor(props) {
        super(props)

        this.state = {
            barangs: [],
            nama: "",
            deskripsi: "",
            harga: 0,
            id: "",
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.id === "") {
            this.setState({
                barangs: [
                    ...this.state.barangs,
                    {
                        id: this.state.barangs.length + 1,
                        nama: this.state.nama,
                        deskripsi: this.state.deskripsi,
                        harga: this.state.harga

                    }
                ]
            })
        } else {
            const barangSelainUpdate = this.state.barangs
                .filter((barang) => barang.id !== this.state.id)
                .map((filterBarang) => {
                    return filterBarang
                });

                this.setState({
                    barangs: [
                        ...barangSelainUpdate,
                        {
                            id: this.state.barangs.length + 1,
                            nama: this.state.nama,
                            deskripsi: this.state.deskripsi,
                            harga: this.state.harga
    
                        }
                    ]
                });
        }



        this.setState({
            nama: "",
            deskripsi: "",
            harga: 0,
            id: "",
        })

        this.state({
            nama: "",
            deskripsi: "",
            harga: 0,
            id: "",
        })
    }

    editData = (id) => {
        const barangUpdate = this.state.barangs
            .filter((barang) => barang.id === id)
            .map((filterBarang) => {
                return filterBarang
            })

        this.setState({
            nama: barangUpdate[0].nama,
            deskripsi: barangUpdate[0].deskripsi,
            harga: barangUpdate[0].harga,
            id: barangUpdate[0].id,
        })
    }

    hapusData = (id) => {
        const barangBaru = this.state.barangs
        .filter((barang) => barang.id !== id)
        .map((filterBarang) => {
            return filterBarang
        });

        this.setState({
            barangs : barangBaru
        })
    }
    render() {
        return (
            <div>
                <NavbarComponent />
                <div className='container mt-4'>
                    <Tabel barangs={this.state.barangs} editData={this.editData}  hapusData={this.hapusData}/>
                    <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                </div>
            </div>
        )
    }
}
