import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Post = (props) => {
    return (
        <Card className="post">
            <CardImg top className="img-thumb" src="https://placeimg.com/200/150/tech" alt="foto" />
            <CardBody>
                <p className="title">{props.data.title}</p>
                <p className="desc">{props.data.body}</p>
                <button className="update" onClick={() => props.update(props.data)}>Update</button>
                <button className="remove" onClick={() => props.remove(props.data.id)}>Remove</button>
            </CardBody>
        </Card>
    )
}

export default Post;