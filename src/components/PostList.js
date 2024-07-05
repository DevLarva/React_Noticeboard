import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const PostList = ({ posts }) => {
    return (
        <List>
            {posts.map((post, index) => (
                <ListItem key={index} button>
                    <ListItemText primary={post.title} secondary={post.date} />
                </ListItem>
            ))}
        </List>
    );
};

export default PostList;
