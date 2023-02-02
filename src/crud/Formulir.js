import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
const Formulir = ({nama,deskripsi,harga,handleSubmit,handleChange}) => {
    return (
        <div className='mt-3'>
            <Row>
                <Col>
                    <h2>Tambah Data</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="nama">
                            <Form.Label>Nama Barang</Form.Label>
                            <Form.Control type="text" name='nama' value={nama} onChange={(event) => handleChange(event)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="deskripsi">
                            <Form.Label>Deskripsi Barang</Form.Label>
                            <Form.Control as="textarea" rows={3} name="deskripsi" value={deskripsi} onChange={(event) => handleChange(event)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="harga">
                            <Form.Label>harga Barang</Form.Label>
                            <Form.Control type="text" name='harga' value={harga} onChange={(event) => handleChange(event)} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default Formulir
