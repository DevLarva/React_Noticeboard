import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PostList from './components/PostList';
import NewPostButton from './components/NewPostButton';
import PostView from './components/PostView';
import { Container, Box } from '@mui/material';

function Main() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchCriteria, setSearchCriteria] = useState('title');
  const [posts, setPosts] = useState([
    { title: '첫 번째 게시물', date: '2023-07-05', author: '홍길동' },
    { title: '두 번째 게시물', date: '2023-07-06', author: '홍길동' },
    { title: '세 번째 게시물', date: '2023-07-07', author: '홍길동' },
    { title: '가 번게 물시게', date: '2023-07-07', author: '홍길동' },
  ]);

  const normalizeText = (text) => text.toLowerCase().replace(/\s+/g, '');

  const filteredPosts = posts.filter(post =>
    normalizeText(post[searchCriteria]).includes(normalizeText(searchQuery))
  );

  const navigate = useNavigate();

  const handleNewPostClick = () => {
    navigate('/newpost');
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

export default function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/newpost" element={<PostView />} />
        </Routes>
      </Container>
    </Router>
  );
}
