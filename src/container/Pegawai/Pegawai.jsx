import React, { Component, Fragment, useState, setOpen } from "react";
import Hello from "../../component/HelloComponent/HelloComponent";
import { Table, Row, Col, Jumbotron, Container, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';
import HelloComponent from "../../component/HelloComponent/HelloComponent";
import DataTable from 'react-data-table-component';
import NumberFormat from 'react-number-format';
import { ModalDialog } from "react-bootstrap";
import ModalExample from "../../component/ModalExample";
import FormCreate from "../../component/Formcreate";
// import ReactPaginate from 'react-paginate';


class Pegawai extends Component {
    state = {
        post: [],
        colum : [],
        formPegawai: {
            id: 1,
            nama: '',
            nama_lembaga: '',
            kredit: '',
            idstatus: ''
        },
        isUpdate: false,
        modal:false
    }

    getPostAPI = () => {
        axios.get('http://localhost:3004/pegawai?_sort=id&_order=desc').then((result) => {
            this.setState({
                post: result.data
            })
            console.log(result.data)
        })
    }

    getColum = () => {
        axios.get('http://localhost:3004/colum').then((result) => {
            this.setState({
                colum: result.data
            })
            console.log(result.data)
        })
    }

    postDataToAPI = () => {
        axios.post('http://localhost:3004/pegawai', this.state.formPegawai).then((res) => {
            this.getPostAPI()
            this.hadleFromClear()
        })
    }

    putDataToAPI = () => {
        axios.put(`http://localhost:3004/pegawai/${this.state.formPegawai.id}`, this.state.formPegawai).then((res) => {
            this.getPostAPI()
            this.hadleFromClear()
        })
    }

    hadleRemove = (data) => {
        axios.delete(`http://localhost:3004/pegawai/${data}`).then((res) => {
            this.getPostAPI()
        })
        // console.log(data)
    }

    handleUpdate = (data) => {
        console.log(data)
        this.setState({
            formPegawai: data,
            isUpdate: true
        })
    }

    hadleUbah = (event) => {
        let formPegawaiNew = { ...this.state.formPegawai }
        let timestamp = new Date().getTime()
        if (!this.state.isUpdate) {
            formPegawaiNew['id'] = timestamp
        }
        formPegawaiNew[event.target.name] = event.target.value
        this.setState({
            formPegawai: formPegawaiNew
        }, (err) => {
            console.log('error : ', err)
        })
    }

    handleSimpan = () => {
        if (this.state.isUpdate) {
            this.putDataToAPI()
        } else {
            this.postDataToAPI()
        }
    }

    hadleFromClear = () => {
        this.setState({
            isUpdate: false,
            formPegawai: {
                nama: '',
                nama_lembaga: '',
                kredit: '',
                idstatus: ''
            }
        })
    }

    toggleModal = () => {
        this.setState({
            modal: true,
        })
    }

    componentDidMount() {
        this.getPostAPI()
        this.getColum()
    }

    render() {
        const {formPegawai} = this.state
        
        return (
            <Fragment>
                <Container className="themed-container" fluid="md">
                    <Jumbotron fluid>
                        <Container fluid>
                            <h1 className="display-3">Fluid jumbotron</h1>
                            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                        </Container>
                    </Jumbotron>
                    <Row className="themed-container" fluid="md">
                        <Col xs="6" sm="10" md="9">
                            {/* <p className="section-title">Create Data Pegawai</p>
                            <div className="form-add-post">
                                <form autoComplete="off" >
                                    <label htmlFor="nama">Nama</label>
                                    <input type="text" value={formPegawai.nama} name="nama" placeholder="Nama" aria-autocomplete="none" onChange={this.hadleUbah} />
                                    <label htmlFor="lmb">Nama Lembaga</label>
                                    <input type="text" value={formPegawai.nama_lembaga} name="nama_lembaga" placeholder="Nama Lembaga" onChange={this.hadleUbah} />
                                    <label htmlFor="lmb">Kredit</label>
                                    <input type="text" value={formPegawai.kredit} name="kredit" placeholder="kredit" onChange={this.hadleUbah} />
                                    <Button color="primary" className="simpan" onClick={this.handleSimpan}>Simpan</Button>
                                </form>
                            </div> */}
                            <FormCreate
                                nama={this.state.formPegawai.nama}
                                nama_lembaga={this.state.formPegawai.nama_lembaga}
                                kredit={this.state.formPegawai.kredit}
                                ubah={this.hadleUbah}
                                simpan={this.handleSimpan}
                                updateState={this.toggleModal}
                            />
                        </Col>
                        <Col xs="6" sm="9" md="9">
                            <p className="section-title">Data Pegawai</p>
                            <Container className="form-add-post">
                                <Table dark>
                                    <thead>
                                        <tr>
                                            {/* <th>Nama</th>
                                            <th>Nama Lembaga</th> */}
                                            
                                            {this.state.colum.map((row, index) => {
                                                return (
                                                    <th>{row}</th>
                                                )
                                            })}
                                            <th>Act</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.post.map((post, index) => {
                                            return <HelloComponent
                                                key={index}
                                                data={post}
                                                remove={this.hadleRemove}
                                                update={this.handleUpdate}
                                            />
                                        })
                                        }
                                    </tbody>
                                </Table>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Fragment >
        )
    }
}


export default Pegawai;