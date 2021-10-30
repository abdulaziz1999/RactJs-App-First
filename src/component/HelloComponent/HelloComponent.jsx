import React from 'react';
import { Jumbotron, Container, Row, Col, Table, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { ThemeProvider } from 'theme-ui';
import icomera from '@bit/icomera.themes.icomera';
import { Card, Flex, IconButton } from '@bit/icomera.components.atoms';
import DataTable from '@bit/icomera.components.layout.data-table';
import { Delete, Edit } from '@bit/icomera.icons.outline';

const numberFormat = value =>
    new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "IDR"
    }).format(value);

const HelloComponent = ({data,update,remove}) => {
    return (
        <tr key={data.id}>
            {/* <td>{data.id}</td> */}
            <td>{data.nama}</td>
            <td>{data.nama_lembaga}</td>
            {/* <td>{props.data.idstatus}</td> */}
            <td>{numberFormat(data.kredit)}</td>
            <td>
                <Button color="success" className="update" onClick={() => update(data)}>Update</Button>{" "}
                <Button color="danger" className="remove" onClick={() => remove(data.id)}>Delete</Button>
            </td>
        </tr>
    );
};


export default HelloComponent;