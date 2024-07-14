import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Paper, Typography, Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem, Box, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export default function PostView() {
    const [title, setTitle] = useState('');
    const [locate, setLocate] = useState('');
    const [content, setContent] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [boothWidth, setBoothWidth] = useState('');
    const [boothHeight, setBoothHeight] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    const onDrop = useCallback((acceptedFiles) => {
        setSelectedFile(acceptedFiles[0]);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*', maxSize: 3145728 });

    const handleUpload = () => {
        if (selectedFile) {
            console.log(selectedFile);
        } else {
            console.log("파일이 선택되지 않았습니다.");
        }
    };

    const handleSubmit = () => {
        console.log({ title, locate, content, companyName, boothWidth, boothHeight });
    };

    const handleCancel = () => {
        setTitle('');
        setLocate('');
        setContent('');
        setCompanyName('');
        setBoothWidth('');
        setBoothHeight('');
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
                        label="행사 장소"
                        variant="outlined"
                        fullWidth
                        value={locate}
                        onChange={(e) => setLocate(e.target.value)}
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="업체명"
                        variant="outlined"
                        fullWidth
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        부스 크기
                    </Typography>
                    <Box display="flex" alignItems="center">
                        <TextField
                            variant="outlined"
                            value={boothWidth}
                            onChange={(e) => setBoothWidth(e.target.value)}
                            required
                            sx={{ flex: 1 }}
                        />
                        <Typography sx={{ mx: 1 }}>mm</Typography>
                        <Typography sx={{ mx: 3 }}>X</Typography>
                        <TextField
                            variant="outlined"
                            value={boothHeight}
                            onChange={(e) => setBoothHeight(e.target.value)}
                            required
                            sx={{ flex: 1 }}
                        />
                        <Typography sx={{ mx: 1 }}>mm</Typography>
                    </Box>
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