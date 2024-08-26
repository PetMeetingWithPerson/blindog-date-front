// src/pages/index.js
import React from 'react';
import KakaoLogin from '../../components/KakaoLogin';
import { Container, Typography } from '@mui/material';

const LoginPage = () => {
  return (
    <Container>
      <Typography variant="h2" component="h2" gutterBottom>
        로그인
      </Typography>
      <KakaoLogin />
    </Container>
  );
};

export default LoginPage;
