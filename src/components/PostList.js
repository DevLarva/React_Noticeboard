import React from 'react';
import { List, ListItem, ListItemText, Box, Typography, Card, CardContent, Divider } from '@mui/material';

const PostList = ({ posts }) => {
    return (
        <Card variant="outlined">
            <CardContent>
                <Box sx={{ borderBottom: '1px solid #ddd' }}>
                    <Box sx={{ display: 'flex', paddingBottom: 2 }}>
                        <Typography variant="body1" sx={{ flexBasis: '10%', fontWeight: 'bold' }}>
                            No
                        </Typography>
                        <Typography variant="body1" sx={{ flexBasis: '50%', fontWeight: 'bold' }}>
                            제목
                        </Typography>
                        <Typography variant="body1" sx={{ flexBasis: '20%', fontWeight: 'bold' }}>
                            작성자
                        </Typography>
                        <Typography variant="body1" sx={{ flexBasis: '20%', fontWeight: 'bold' }}>
                            날짜
                        </Typography>
                    </Box>
                    <List>
                        {posts.map((post, index) => (
                            <React.Fragment key={index}>
                                <ListItem button>
                                    <ListItemText
                                        primary={
                                            <Box sx={{ display: 'flex' }}>
                                                <Typography variant="body1" sx={{ flexBasis: '10%' }}>
                                                    {post.number}
                                                </Typography>
                                                <Typography variant="body1" sx={{ flexBasis: '50%' }}>
                                                    {post.title}
                                                </Typography>
                                                <Typography variant="body1" sx={{ flexBasis: '20%' }}>
                                                    {post.author}
                                                </Typography>
                                                <Typography variant="body1" sx={{ flexBasis: '20%' }}>
                                                    {post.date}
                                                </Typography>
                                            </Box>
                                        }
                                    />
                                </ListItem>
                                {index < posts.length - 1 && <Divider />}
                            </React.Fragment>
                        ))}
                    </List>
                </Box>
            </CardContent>
        </Card>
    );
};

export default PostList;
