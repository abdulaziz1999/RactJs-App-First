import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const FormCreate = (props) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    console.log(modal)

    return (
        <div>
            <Button color="danger" onClick={toggle}>Modal Tes</Button>
            <Modal size="lg" isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <p className="section-title">Create Data Pegawai</p>
                    <div className="form-add-post">
                        <form autoComplete="off" >
                            <label htmlFor="nama">Nama</label>
                            <input type="text" value={props.nama} name="nama" placeholder="Nama" aria-autocomplete="none" onChange={props.ubah} />
                            <label htmlFor="lmb">Nama Lembaga</label>
                            <input type="text" value={props.nama_lembaga} name="nama_lembaga" placeholder="Nama Lembaga" onChange={props.ubah} />
                            <label htmlFor="lmb">Kredit</label>
                            <input type="text" value={props.kredit} name="kredit" placeholder="kredit" onChange={props.ubah} />
                            
                        </form>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" className="simpan" onClick={props.simpan}>Simpan</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>

        </div>
    );
}

export default FormCreate;
