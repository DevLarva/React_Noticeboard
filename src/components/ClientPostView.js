import React, { useState, useCallback } from 'react';
import { Paper, Typography, Grid, TextField, Button, Box, RadioGroup, Container, FormControlLabel, Radio, Tooltip, Divider } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';

export default function ClientPostView() {
    const [eventName, setEventName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [manager, setManager] = useState('');
    const [callNumber, setCallNumber] = useState('');
    const [location, setLocation] = useState('');
    const [boothLayout, setBoothLayout] = useState('');
    const [installDate, setInstallDate] = useState(null);
    const [removeDate, setRemoveDate] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [department, setDepartment] = useState('앤드앤');

    const onDrop = useCallback((acceptedFiles) => {
        setSelectedFile(acceptedFiles[0]);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*', maxSize: 3145728 });

    const handleSubmit = () => {
        console.log({ eventName, companyName, manager, callNumber, location, boothLayout, installDate, removeDate, selectedFile });
    };

    const handleCancel = () => {
        setEventName('');
        setCompanyName('');
        setManager('');
        setCallNumber('');
        setLocation('');
        setBoothLayout('');
        setInstallDate(null);
        setRemoveDate(null);
        setSelectedFile(null);
    };

    return (
        <Container component="main" maxWidth="md">
            <Paper elevation={3} sx={{ padding: 3, marginTop: 3 }}>
                <Typography variant="h5" align="center" gutterBottom>
                    WORK SHEET
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h6">Client</Typography>
                        <Divider />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="행사명"
                            variant="outlined"
                            fullWidth
                            value={eventName}
                            onChange={(e) => setEventName(e.target.value)}
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="업체명"
                            variant="outlined"
                            fullWidth
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="담당자"
                            variant="outlined"
                            fullWidth
                            value={manager}
                            onChange={(e) => setManager(e.target.value)}
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="연락처"
                            variant="outlined"
                            fullWidth
                            value={callNumber}
                            onChange={(e) => setCallNumber(e.target.value)}
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="행사 장소"
                            variant="outlined"
                            fullWidth
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="부스 배치도"
                            variant="outlined"
                            fullWidth
                            value={boothLayout}
                            onChange={(e) => setBoothLayout(e.target.value)}
                            required
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="h6">부스 담당자</Typography>
                        <Divider />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="담당자"
                            variant="outlined"
                            fullWidth
                            value={manager}
                            onChange={(e) => setManager(e.target.value)}
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="연락처"
                            variant="outlined"
                            fullWidth
                            value={callNumber}
                            onChange={(e) => setCallNumber(e.target.value)}
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <DatePicker
                            locale={ko}
                            selected={installDate}
                            onChange={(date) => setInstallDate(date)}
                            dateFormat="yyyy/MM/dd"
                            customInput={<TextField fullWidth label="설치 예정일시" variant="outlined" />}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <DatePicker
                            locale={ko}
                            selected={removeDate}
                            onChange={(date) => setRemoveDate(date)}
                            dateFormat="yyyy/MM/dd"
                            customInput={<TextField fullWidth label="철거 예정일시" variant="outlined" />}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="h6">그래픽 신청 내역</Typography>
                        <Divider />
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
                        {selectedFile && (
                            <Box mt={2}>
                                <Typography variant="body2">
                                    선택된 파일: {selectedFile.name}
                                </Typography>
                            </Box>
                        )}
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="h6">물품 픽업</Typography>
                        <Divider />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="신청인"
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="연락처"
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="수거일시"
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="수거장소"
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="메모"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={4}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={handleSubmit}
                        >
                            제출
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
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
        </Container>
    );
}





/*
Client
- 행사명, 업체명, 담당자, 연락처, 장소, 부스 배치도
부스담당자
- 담당자, 연락처, 행사일시, 부스 사이즈, 설치 담당자, 설치 담당자 연락처, 설치예정일시, 철거예정일시
그래픽 신청 내역
(이미지 첨부)
물품 픽업
*/