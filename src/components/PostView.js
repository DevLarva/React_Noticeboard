import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Paper, Typography, Grid, TextField, Button, Box, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';

export default function PostView() {
    const [title, setTitle] = useState('');     //행사명
    const [locate, setLocate] = useState('');   //행사장소
    const [content, setContent] = useState(''); //내용
    const [companyName, setCompanyName] = useState(''); //업체명
    const [boothWidth, setBoothWidth] = useState('');   //부스 크기(너비)
    const [boothHeight, setBoothHeight] = useState(''); //부스 크기(높이)
    const [installDateRange, setInstallDateRange] = useState([null, null]);   // 설치 날짜 범위
    const [selectedFiles, setSelectedFiles] = useState([]); //첨부 파일
    const [designer, setDesigner] = useState('');       //담당 디자이너

    const onDrop = useCallback((acceptedFiles) => {
        setSelectedFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*, application/pdf', maxSize: 3145728 });

    const handleUpload = () => {
        if (selectedFiles.length > 0) {
            selectedFiles.forEach(file => {
                console.log(file);
            });
        } else {
            console.log("파일이 선택되지 않았습니다.");
        }
    };

    const handleSubmit = () => {
        console.log({ title, locate, content, companyName, boothWidth, boothHeight, installDateRange });
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
                <Grid item xs={12} sm={4}>
                    <TextField
                        label="행사 장소"
                        variant="outlined"
                        fullWidth
                        value={locate}
                        onChange={(e) => setLocate(e.target.value)}
                        required
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
                        />
                        <Typography sx={{ mx: 1 }}>mm</Typography>
                        <Typography sx={{ mx: 3 }}>X</Typography>
                        <TextField
                            variant="outlined"
                            value={boothHeight}
                            onChange={(e) => setBoothHeight(e.target.value.replace(/[^0-9]/g, ''))}
                            required
                            sx={{ flex: 1 }}
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
                                <Typography key={index} variant="body2">
                                    선택된 파일: {file.name}
                                </Typography>
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

행사 기간, 설치기간 철수 기간 모두 기간제로(~) 로 표현 달력 2개씩
TODO: 첨부파일 선택된것들 삭제하기 위한 버튼 추가필요, 부스 크기 숫자만 입력 받게끔. 기간 입력 받을때 텍스트 필드처럼 작동 안하게(자동완성)
시간 라이브러리 추가하기
*/