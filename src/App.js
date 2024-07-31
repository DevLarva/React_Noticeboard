import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PostList from './components/PostList';
import NewPostButton from './components/NewPostButton';
import PostView from './components/PostView';
import ClientPostView from './components/ClientPostView';
import { Container, Box } from '@mui/material';
import axios from 'axios';

// axios 기본 URL 설정
axios.defaults.baseURL = 'http://andn-btest-env.eba-zwp5cit2.ap-northeast-2.elasticbeanstalk.com';

function Main() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchCriteria, setSearchCriteria] = useState('title');
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/api/andn/articles')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error("게시물 가져오기 실패:", error);
      });
  }, []);

  const normalizeText = (text) => text.toLowerCase().replace(/\s+/g, '');

  const filteredPosts = posts.filter(post =>
    normalizeText(post[searchCriteria]).includes(normalizeText(searchQuery))
  );

  const handleNewPostClick = () => {
    navigate('/newpost');
  };

  const handlePostSaved = () => {
    // 새 게시물 저장 후 게시물 목록 새로고침
    axios.get('/api/andn/articles')
      .then(response => {
        setPosts(response.data);
        navigate('/');
      })
      .catch(error => {
        console.error("게시물 가져오기 실패:", error);
      });
  };

  return (
    <>
      <Box my={4}>
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          searchCriteria={searchCriteria}
          setSearchCriteria={setSearchCriteria}
        />
      </Box>
      <Box my={4} sx={{ position: 'relative' }}>
        <PostList posts={filteredPosts} />
        <NewPostButton onClick={handleNewPostClick} />
      </Box>
    </>
  );
}

function ClientPostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/api/outsourcing/articles')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error("외주업체 글 가져오기 실패:", error);
      });
  }, []);

  return <PostList posts={posts} />;
}

export default function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/newpost" element={<PostView onPostSaved={() => { }} />} />
          <Route path="/client/posts" element={<ClientPostList />} />
        </Routes>
      </Container>
    </Router>
  );
}
