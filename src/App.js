import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PostList from './components/PostList';
import { Container, Box } from '@mui/material';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [posts, setPosts] = useState([
    { title: '첫 번째 게시물', date: '2023-07-05', author: '홍길동', number: 1 },
    { title: '두 번째 게시물', date: '2023-07-06', author: '홍길동', number: 2 },
    { title: '세 번째 게시물', date: '2023-07-07', author: '홍길동', number: 3 },
  ]);

  const normalizeText = (text) => text.toLowerCase().replace(/\s+/g, '');

  const filteredPosts = posts.filter(post =>
    normalizeText(post.title).includes(normalizeText(searchQuery))
  );

  return (
    <div>
      <Header />
      <Container>
        <Box my={4}>
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </Box>
        <Box my={4}>
          <PostList posts={filteredPosts} />
        </Box>
      </Container>
    </div>
  );
};

export default App;
