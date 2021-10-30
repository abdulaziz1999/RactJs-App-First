import React, { Fragment } from 'react';
//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';
//For API Requests
import axios from 'axios';


class StateFullComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],

        }
    }
    componentDidMount() {
        //Get all users details in bootstrap table
        axios.get('http://10.10.99.56:3004/posts').then(res => {
            //Storing users detail in state array object
            this.setState({ data: res.data });

        });
        //initialize datatable
        $(document).ready(function () {
            $('#example').DataTable();
        });
    }
    render() {
        //Datatable HTML
        return (

            <div className="MainDiv">
                <div class="jumbotron text-center">
                    <h3>Therichpost.com</h3>
                </div>

                <div className="container">

                    <table id="example" class="table table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Email</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((result) => {
                                return (
                                    <tr key={result.id}>
                                        <td>{result.id}</td>
                                        <td>{result.title}</td>
                                        <td>{result.body}</td>
                                    </tr>

                                )
                            })}
                        </tbody>
                    </table>

                </div>
            </div>
        );
    }

}

export default StateFullComponent;