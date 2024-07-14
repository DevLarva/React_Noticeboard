import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import {
    Paper,
    Typography,
    Grid,
    TextField,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Box,
    Checkbox,
    FormGroup,
    FormControlLabel
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export default function PostView() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    const onDrop = useCallback((acceptedFiles) => {
        setSelectedFile(acceptedFiles[0]);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*', maxSize: 3145728 });

    const handleUpload = () => {
        // 파일 업로드 처리 로직 추가
        if (selectedFile) {
            console.log(selectedFile);
        } else {
            console.log("파일이 선택되지 않았습니다.");
        }
    };

    const handleSubmit = () => {
        console.log({ title, author, content, category });
    };

    const handleCancel = () => {
        setTitle('');
        setAuthor('');
        setContent('');
        setCategory('');
        setSelectedFile(null);
    };

    return (
        <Paper sx={{ p: 3, mt: 3 }}>
            <Typography variant="h5" gutterBottom>
                글 작성
            </Typography>
            <FormGroup>

                <FormControlLabel control={<Checkbox defaultChecked />} label="외주업체 공유" />
            </FormGroup>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        label="행사명"
                        variant="outlined"
                        fullWidth
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="작성자"
                        variant="outlined"
                        fullWidth
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel>카테고리</InputLabel>
                        <Select
                            label="카테고리"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <MenuItem value="카테고리1">카테고리1</MenuItem>
                            <MenuItem value="카테고리2">카테고리2</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ my: 2, p: 2, border: '2px dashed #ccc', borderRadius: '4px', textAlign: 'center' }} {...getRootProps()}>
                        <input {...getInputProps()} />
                        <CloudUploadIcon sx={{ fontSize: 48, color: '#ccc' }} />
                        <Typography variant="body1" sx={{ mt: 1 }}>
                            클릭 혹은 파일을 이곳에 드롭하세요.
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1, color: '#666' }}>
                            파일당 최대 10MB
                        </Typography>
                    </Box>
                    {selectedFile && (
                        <Box mt={2}>
                            <Typography variant="body2">
                                선택된 파일: {selectedFile.name}
                            </Typography>
                        </Box>
                    )}
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="내용"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handleSubmit}
                    >
                        제출
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        onClick={handleCancel}
                    >
                        취소
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
}



/*
필수 내용
행사명 , 행사 장소
업체명, 부스사이즈
설치기간, 행사기간, 철수기간
담당디자이너
*/