import React from 'react';
import { Button, Box } from '@mui/material';

export default function NewPostButton({ onClick }) {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button
                color="primary"
                variant="contained"
                onClick={onClick}
                size="large"
            >
                글작성
            </Button>
        </Box>
    );
}
