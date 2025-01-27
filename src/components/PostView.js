import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, Typography, Grid, TextField, Button, Box, Checkbox, FormGroup, FormControlLabel, IconButton } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload'; // Import for CloudUploadIcon
import DeleteIcon from '@mui/icons-material/Delete'; // Import for DeleteIcon
import DatePicker from 'react-datepicker'; // Import for DatePicker
import { ko } from 'date-fns/locale'; // Import for ko locale
import { useDropzone } from 'react-dropzone'; // Import for useDropzone
import { savePost, getOutsourcingArticles } from '../api/api'; // Named imports from api.js

export default function PostView({ onPostSaved }) {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [locate, setLocate] = useState('');
    const [content, setContent] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [boothWidth, setBoothWidth] = useState('');
    const [boothHeight, setBoothHeight] = useState('');
    const [installDateRange, setInstallDateRange] = useState([null, null]);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [designer, setDesigner] = useState('');
    const [outsourcingOptions, setOutsourcingOptions] = useState([]);
    const [selectedOutsourcingId, setSelectedOutsourcingId] = useState('');

    useEffect(() => {
        // Fetch outsourcing options
        getOutsourcingArticles()
            .then(response => {
                setOutsourcingOptions(response);
            })
            .catch(error => {
                console.error('Error fetching outsourcing options:', error);
            });
    }, []);

    const onDrop = useCallback((acceptedFiles) => {
        setSelectedFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: 'image/*, application/pdf',
        maxSize: 3145728 // 3MB
    });

    const handleFileRemove = (fileToRemove) => {
        setSelectedFiles((prevFiles) => prevFiles.filter(file => file !== fileToRemove));
    };

    const handleSubmit = async () => {
        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('locate', locate);
            formData.append('content', content);
            formData.append('companyName', companyName);
            formData.append('boothWidth', boothWidth);
            formData.append('boothHeight', boothHeight);
            formData.append('installDateRange', installDateRange);
            formData.append('designer', designer);
            formData.append('outsourcingId', selectedOutsourcingId);

            selectedFiles.forEach(file => {
                formData.append('files', file);
            });

            await savePost(formData); // Use savePost from api.js
            console.log('게시물이 성공적으로 저장되었습니다');
            onPostSaved(); // Call the onPostSaved callback
            navigate('/');
        } catch (error) {
            console.error('게시물 저장 중 오류 발생:', error);
        }
    };

    const handleCancel = () => {
        setTitle('');
        setLocate('');
        setContent('');
        setCompanyName('');
        setBoothWidth('');
        setBoothHeight('');
        setInstallDateRange([null, null]);
        setSelectedFiles([]);
        setDesigner('');
        setSelectedOutsourcingId('');
        navigate('/');
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
                        autoComplete="off"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        label="행사 장소"
                        variant="outlined"
                        fullWidth
                        value={locate}
                        onChange={(e) => setLocate(e.target.value)}
                        required
                        autoComplete="off"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        label="업체명"
                        variant="outlined"
                        fullWidth
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        required
                        autoComplete="off"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        label="담당 디자이너"
                        variant="outlined"
                        fullWidth
                        value={designer}
                        onChange={(e) => setDesigner(e.target.value)}
                        required
                        autoComplete="off"
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
                            onChange={(e) => setBoothWidth(e.target.value.replace(/[^0-9]/g, ''))}
                            required
                            sx={{ flex: 1 }}
                            autoComplete="off"
                        />
                        <Typography sx={{ mx: 1 }}>mm</Typography>
                        <Typography sx={{ mx: 3 }}>X</Typography>
                        <TextField
                            variant="outlined"
                            value={boothHeight}
                            onChange={(e) => setBoothHeight(e.target.value.replace(/[^0-9]/g, ''))}
                            required
                            sx={{ flex: 1 }}
                            autoComplete="off"
                        />
                        <Typography sx={{ mx: 1 }}>mm</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <DatePicker
                        locale={ko}
                        selectsRange
                        startDate={installDateRange[0]}
                        endDate={installDateRange[1]}
                        onChange={(update) => setInstallDateRange(update)}
                        dateFormat="yyyy/MM/dd"
                        customInput={<TextField fullWidth label="설치 기간" variant="outlined" />}
                        autoComplete="off"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ my: 2, p: 2, border: '2px dashed #ccc', borderRadius: '4px', textAlign: 'center' }} {...getRootProps()}>
                        <input {...getInputProps()} />
                        <CloudUploadIcon sx={{ fontSize: 48, color: '#ccc' }} />
                        <Typography variant="body1" sx={{ mt: 1 }}>
                            클릭 혹은 파일을 이곳에 드롭하세요.
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1, color: '#666' }}>
                            파일당 최대 3MB
                        </Typography>
                    </Box>
                    {selectedFiles.length > 0 && (
                        <Box mt={2}>
                            {selectedFiles.map((file, index) => (
                                <Box key={index} display="flex" alignItems="center" justifyContent="space-between">
                                    <Typography variant="body2">
                                        {file.name}
                                    </Typography>
                                    <IconButton onClick={() => handleFileRemove(file)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Box>
                            ))}
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
                        autoComplete="off"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        select
                        variant="outlined"
                        fullWidth
                        value={selectedOutsourcingId}
                        onChange={(e) => setSelectedOutsourcingId(e.target.value)}
                        SelectProps={{
                            native: true,
                        }}
                        required
                        autoComplete="off"
                    >
                        <option value="">외주업체 선택</option>
                        {outsourcingOptions.map(option => (
                            <option key={option.id} value={option.id}>
                                {option.name}
                            </option>
                        ))}
                    </TextField>
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
