import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PostList from './components/PostList';
import NewPostButton from './components/NewPostButton';
import { Container, Box } from '@mui/material';

export default function App() {
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

  const handleNewPostClick = () => {
    // 새 글 작성 폼을 여는 기능을 추가.
    alert('새 글 작성 폼 열기');
  };

  return (
    <div>
      <Header />
      <Container>
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
      </Container>
    </div>
  );
}
