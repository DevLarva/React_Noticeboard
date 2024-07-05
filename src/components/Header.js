import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

const Header = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#F1F3F7' }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#000' }}>
                    And N
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button color="info" size='large'>일정</Button>
                    <Button color="info" size='large'>클라이언트</Button>
                    <Button color="info" size='large'>알림</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
