import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import Header from './components/Header';
import Main from './components/Main';  // Main 컴포넌트 import
import PostView from './components/PostView';
import ClientPostList from './components/ClientPostList';  // ClientPostList 컴포넌트 import

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
