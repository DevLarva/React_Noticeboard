import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

export default function PostList({ posts }) {
    return (
        <TableContainer component={Paper}>

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ backgroundColor: '#f0f0f0', fontWeight: 'bold' }}>No</TableCell>
                        <TableCell sx={{ backgroundColor: '#f0f0f0', fontWeight: 'bold' }}>제목</TableCell>
                        <TableCell sx={{ backgroundColor: '#f0f0f0', fontWeight: 'bold' }}>작성자</TableCell>
                        <TableCell sx={{ backgroundColor: '#f0f0f0', fontWeight: 'bold' }}>작성날짜</TableCell>
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
