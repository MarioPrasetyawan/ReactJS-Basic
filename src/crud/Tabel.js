import React from 'react'
import Table from 'react-bootstrap/Table';

const Tabel = ({ barangs, editData, hapusData }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nama Barang</th>
                    <th>Deskripsi</th>
                    <th>Harga</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                {barangs.map((barang, index) => {
                    return (
                        <tr>
                            <td>{index+1}</td>
                            <td>{barang.nama}</td>
                            <td>{barang.deskripsi}</td>
                            <td>Rp. {barang.harga}</td>
                            <td>
                                 <button className='btn btn-warning mr-2 ' onClick={() => editData(barang.id)}>Edit</button>
                                 <button className='btn btn-danger  ' onClick={() => hapusData(barang.id)}>Hapus</button>
                            </td>
                        </tr>
                    );
                })}

            </tbody>
        </Table>
    )
}

export default Tabel
