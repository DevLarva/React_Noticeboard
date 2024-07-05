import React, { useState } from 'react';
import { List, ListItem, ListItemText, Box, Typography, Card, CardContent } from '@mui/material';

const PostList = ({ posts }) => {
    const [pageNumber, setPageNumber] = useState(0);
    const postsPerPage = 10;
    const pagesVisited = pageNumber * postsPerPage;

    const displayPosts = posts
        .slice(pagesVisited, pagesVisited + postsPerPage)
        .map((post, index) => (
            <ListItem key={index} button>
                <ListItemText
                    primary={
                        <Box sx={{ display: 'flex', gap: 30 }}>
                            <Typography variant="body1" sx={{ flexShrink: 0 }}>
                                {post.number}
                            </Typography>
                            <Typography variant="body1" sx={{ flexGrow: 1 }}>
                                {post.title}
                            </Typography>
                            <Typography variant="body1" sx={{ flexShrink: 0, marginLeft: '30px' }}>
                                {post.author}
                            </Typography>
                            <Typography variant="body1" sx={{ flexShrink: 0, marginLeft: '10px' }}>
                                {post.date}
                            </Typography>
                        </Box>
                    }
                />
            </ListItem>
        ));

    const pageCount = Math.ceil(posts.length / postsPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <Card variant="outlined">
            <CardContent>
                <Box sx={{ display: 'flex', gap: 30, paddingBottom: 2, borderBottom: '1px solid #ddd' }}>
                    <Typography variant="body1" sx={{ flexShrink: 0, fontWeight: 'bold' }}>
                        No
                    </Typography>
                    <Typography variant="body1" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                        제목
                    </Typography>
                    <Typography variant="body1" sx={{ flexShrink: 0, fontWeight: 'bold', marginLeft: '30px' }}>
                        작성자
                    </Typography>
                    <Typography variant="body1" sx={{ flexShrink: 0, fontWeight: 'bold', marginLeft: '30px' }}>
                        날짜
                    </Typography>
                </Box>
                <List>
                    {displayPosts}
                </List>
            </CardContent>
        </Card>
    );
};

export default PostList;
