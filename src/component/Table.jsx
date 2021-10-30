import React, { Component } from 'react'

const $ = require('jquery')
$.Datatable = require('datatables.net') 

class Tabel extends Component {

    componentDidMount() {
        console.log(this.el);
        this.$el = $(this.el)
        this.$el.DataTable(
            {
                data: this.props.data,
                columns: [
                    { title: "NIP" },
                    { title: "Nama Pegawai" },
                    { title: "Alamat" },
                ]
            }
        )
    }

    componentWillMount() {

    }

    render() {
        return <div>
            <table className="display" width="100%" ref={el => this.el = el} >

            </table>
        </div>
    }

}

export default Tabel;
