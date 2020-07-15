import React from 'react';
import PostListItem from "../post-list-item";
import { ListGroup, ListGroupItem } from 'reactstrap';
import "./post-list.css"

const PostList = ({posts, onDelete}) => {

    const elements = posts.map((elem) => {
        const {id, ...itemProps} = elem;
        return (
            <li key = {id} className="list-group-item">
                <PostListItem {...itemProps} onDelete={() => onDelete(id)}/>
            </li>
        ) 
    })
    return(
        <ListGroup className="app-list ">
            {elements}
        </ListGroup>
    )
} 

export default PostList;