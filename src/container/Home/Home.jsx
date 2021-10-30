import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { Component } from "react";
import "./Home.css";
import BlogPost from "../BlogPost/BlogPost";
import YoutubeList from "../YoutubeList/YoutubeList";
import HelloComponent from "../../component/HelloComponent/HelloComponent"
import App from '../../App';
import Pegawai from "../Pegawai/Pegawai";
// import DataUser from "../DataUser/DataUser";
// import StateFullComponent from "../StateFullComponent";
import TableData from "../TableData";
import ModalExample from "../../component/ModalExample";
// import InsertArray from "../../container/InsertArray";

class Home extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="menu">
                        <ul>
                            <li><Link to="/">React JS</Link></li>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/pegawai">Pegawai</Link></li>
                            <li><Link to="/data">Data Table</Link></li>
                            <li><Link to="/modal">Modal</Link></li>
                            <li><Link to="/insert">Array</Link></li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/home" component={YoutubeList} />
                        <Route path="/pegawai" component={Pegawai} />
                        <Route path="/blog" component={BlogPost} />
                        <Route path="/data" component={TableData} />
                        <Route path="/modal" component={ModalExample} />
                        {/* <Route path="/insert" component={InsertArray} /> */}
                        <Route exact path="/" component={App} />
                    </Switch>
                </div>
            </Router>
        )
    }


}

export default Home;