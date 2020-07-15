import React from 'react';
import PostListItem from "../post-list-item";
import "./post-list.css"

const PostList = ({posts}) => {

    const elements = posts.map((elem) => {
        const {id, ...itemProps} = elem;
        return (
            <li key = {id} className="list-group-item">
                <PostListItem {...itemProps}/>
            </li>
        ) 
    })
    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
} 

export default PostList;