import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

const PostList = ({ posts }) => {
    return (
        <TableContainer component={Paper}>

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>No</TableCell>
                        <TableCell>제목</TableCell>
                        <TableCell>글쓴이</TableCell>
                        <TableCell>작성날짜</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {posts.map((post, index) => (
                        <TableRow key={index}>
                            <TableCell>{post.number}</TableCell>
                            <TableCell>{post.title}</TableCell>
                            <TableCell>{post.author}</TableCell>
                            <TableCell>{post.date}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default PostList;
