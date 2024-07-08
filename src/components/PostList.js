import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography, Box } from '@mui/material';

export default function PostList({ posts }) {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ backgroundColor: '#f0f0f0', fontWeight: 'bold', width: '10%' }}>No</TableCell>
                        <TableCell sx={{ backgroundColor: '#f0f0f0', fontWeight: 'bold', width: '50%' }}>제목</TableCell>
                        <TableCell sx={{ backgroundColor: '#f0f0f0', fontWeight: 'bold', width: '20%' }}>작성자</TableCell>
                        <TableCell sx={{ backgroundColor: '#f0f0f0', fontWeight: 'bold', width: '20%' }}>작성날짜</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {posts.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={4}>
                                <Box sx={{ textAlign: 'center', padding: 2 }}>
                                    <Typography variant="h6" fontWeight="bold">
                                        아직 작성한 글이 없습니다.
                                    </Typography>
                                </Box>
                            </TableCell>
                        </TableRow>
                    ) : (
                        posts.map((post, index) => (
                            <TableRow key={index}>
                                <TableCell sx={{ width: '10%' }}>{index + 1}</TableCell>
                                <TableCell sx={{ width: '50%' }}>{post.title}</TableCell>
                                <TableCell sx={{ width: '20%' }}>{post.author}</TableCell>
                                <TableCell sx={{ width: '20%' }}>{post.date}</TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
