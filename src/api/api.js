import axios from 'axios';

// 기본 URL 설정
const api = axios.create({
    baseURL: 'http://andn-btest-env.eba-zwp5cit2.ap-northeast-2.elasticbeanstalk.com',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;
