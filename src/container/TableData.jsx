
import React, { Component } from 'react';
import Tabel from '../component/Table'
import '../App.css';
import axios from "axios";

class TableData extends Component {
    state = {
        post: [],
        formPegawai: {
            id: 1,
            nama: '',
            nama_lembaga: '',
            kredit: '',
            idstatus: ''
        },
        isUpdate: false
    }

    componentDidMount() {
        this.getPostAPI();
    }
    
    getPostAPI = () => {
        axios.get('http://localhost:3004/posts').then((result) => {
            this.setState({
                post: result.data
            })
            console.log(result.data)
        })
    }
    render() {
        return (
            <div className="App">
                <Tabel data={this.dataSet}></Tabel>
            </div>
        );
    }
    
    dataSet = [
        ["200503", "Ade Kartono", "Jl. H. Azra\'i RT.007/01\r\nMenteng Dalam"],
        ["200505", "Amalia", "Jl. Ciak RT.004/01 No.18\r\nBukit Duri"],
        ["200506", "Arief Budiman", "Gg. Subur Ujung No.12 RT.012/015\r\nMenteng Atas"],
        ["200507", "Balqis", "Jl. Kampung Melayu Kecil III/14 RT.001/09"],
        ["200509", "Endah Suci Rahayu", "Harapan Indah\r\nJl. Melon VI Blok SM No.2"],
        ["200510", "Era Hapsari", "Jl. Puspa II/2 RT.002/01\r\nSenayan"],
        ["200511", "Erny Yulianty", "Jl. Kampung Melayu Kecil I/31 RT.004/011"],
        ["200513", "Euis Herawati", "Jl. Kalibata Utara III/32 RT.005/02"],
        ["200514", "Fitri Rizkiyanti", "Jl. Kebon Baru V RT.006/09 No.27\r\nTebet"],
        ["200515", "Untung Sugianto", "Cinere No.187 Kelapa Sawit Blok E"],
        ["200516", "Hasanah", "Jl. X No.10 RT.004/100\r\nKebon Baru"],
        ["200517", "Ira Ekawati", "Jl. Jatinegara Barat No.13 RT.011/03"],
        ["200518", "Jerry Manggreno", "Jl. Minangkabau RT.01/08 No. 1A\r\nManggarai"],
        ["200519", "Roskawati", "Perum Depok Indah I/A No.64 RT.002/09"],
        ["200520", "Mery Theresia", "Jl. H. Mochtar Raya No.23\r\nGg. Belimbing RT.002/01\r\nKreo-Lembang"],
        ["200523", "Aldiles", "Jl. Turi II RT.03/010 Depok I, Kemiri Muka"],
        ["200524", "Hendi Ekopanto", "Jl. Tambak II/24 Komp. POLRI Inkopol"],
        ["200525", "Arif Fadilah", "Jl. Penegak No.15 RT.03/02"],
        ["200526", "Lelly Kusumawati", "Jl. Jatinegara Barat No.24 RT.05/02"],
        ["200527", "Andriansyah", "Jl. Tebet Timur II F No.24 RT.05/07"],
        ["200528", "Bayu Chandra Purnomo", "Jl. Perkutut No.100 RT.06/08"],
        ["200529", "Herlianti", "Jl. Siaga Raya Komplek Siaga Baru Blok C No.6"],
        ["200531", "Kati Lianarisanti", "Jl. Panti Asuhan A 6 No.1 RT,013/01"],
        ["200532", "Ika Astuti", "Jl. Mampang Prapatan XVI/30 RT.02/055"],
        ["200533", "Merlindo Rachmono", "Jl. Jati Padang Utara No.21 RT.010/02"],
        ["200534", "Khairul Anwar", "Jl. Bangka IX No.32 RT.010/012"],
        ["200535", "Dewi Rahayu", "Jl. Bukit Duri Utara Blok L 196 RT.03/03"],
        ["200536", "Dewi Rahmawati", "Komplek PBB Kalang Tirta No.4 RT.04/09"],
        ["200537", "Nurlidiantini Virgonita", "Jl. Kramat V No.16 RT.03/06"],
        ["200538", "Lucky Chandra Dewi", "Jl. TB Simatupang G. H. Dul No.61 RT.09/02"],
        ["200541", "Adang Ningsih", "Jl. Kawi No.8 RT.10/02"],
        ["200542", "Chairul Anwar", "Jl. Jatinegara Barat No.24 RT.05/02"],
        ["200545", "Chastel Idris", "Jl. Meruya Utara No.4 RT.05/09"],
        ["200546", "Dian Partiana Dewi", "Jl. Otista Raya G. Sa\'abun No.22 RT.10/02"],
        ["200547", "Fajar Nugraha", "Jl. Tebet Utara II F/4 RT.04/01"],
        ["200548", "Ferry Irawan", "Jl. Majid Annur No.4 RT.05/02"]
    ];
}

export default TableData;
