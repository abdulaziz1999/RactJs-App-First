import React, { Component, Fragment } from "react";
import './BlogPost.css';
import Post from "../../component/Post/Post";
import { Jumbotron, Container, Row, Col, Table, Button } from 'reactstrap';
import axios from 'axios';

class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        },
        isUpdate: false
    }

    getPostAPI = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc').then((result) => {
            this.setState({
                post: result.data
            })
        })
    }

    postDataToAPI = () => {
        axios.post('http://localhost:3004/posts', this.state.formBlogPost).then((res) => {
            this.getPostAPI()
            this.hadleFromClear()
        })
    }

    putDataToAPI = () => {
        axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost).then((res) => {
            this.getPostAPI()
            this.hadleFromClear()
        })
    }

    hadleRemove = (data) => {
        axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
            this.getPostAPI()
        })
    }

    handleUpdate = (data) => {
        console.log(data)
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
    }

    hadleFormChange = (event) => {
        let formBlogPostNew = { ...this.state.formBlogPost }
        let timestamp = new Date().getTime()
        if (!this.state.isUpdate) {
            formBlogPostNew['id'] = timestamp
        }
        formBlogPostNew[event.target.name] = event.target.value
        this.setState({
            formBlogPost: formBlogPostNew
        }, (err) => {
            console.log('error : ', err)
        })
    }

    hadleFromClear = () => {
        this.setState({
            isUpdate: false,
            formBlogPost: {
                id: 1,
                title: '',
                body: '',
                userId: 1
            }
        })
    }

    handleSubmit = () => {
        if (this.state.isUpdate) {
            this.putDataToAPI()
        } else {
            this.postDataToAPI()
        }
    }

    componentDidMount() {
        this.getPostAPI()
    }

    render() {
        return (
            <Fragment>
                <Container>
                    <Jumbotron fluid>
                        <Container fluid>
                            <h1 className="display-3">Fluid jumbotron</h1>
                            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                        </Container>
                    </Jumbotron>

                    <Row>
                        <Col xs="6" sm="6">
                            <p className="section-title">Create Blog Post</p>
                            <div className="form-add-post">
                                <label htmlFor="title">Title</label>
                                <input type="text" value={this.state.formBlogPost.title} name="title" placeholder="add title" onChange={this.hadleFormChange} />
                                <label htmlFor="body">Blog Content</label>
                                <textarea value={this.state.formBlogPost.body} name="body" id="body" cols="30" rows="10" placeholder="add blog content" onChange={this.hadleFormChange}></textarea>
                                <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
                            </div>
                        </Col>
                        <Col xs="6" sm="6" >
                            <p className="section-title">Blog Post</p>
                            {
                                this.state.post.map(post => {
                                    return <Post
                                        key={post.id}
                                        data={post}
                                        remove={this.hadleRemove}
                                        update={this.handleUpdate} />
                                })
                            }
                        </Col>
                    </Row>
                </Container>
            </Fragment >
        )
    }
}


export default BlogPost;