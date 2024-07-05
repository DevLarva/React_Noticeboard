import React from 'react';
import TextField from '@mui/material/TextField';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    return (
        <TextField
            label="검색"
            variant="outlined"
            fullWidth
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />
    );
};

export default SearchBar;
