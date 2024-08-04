// src/components/KakaoLogin.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const { REACT_APP_KAKAO_JS_KEY } = process.env;

const KakaoLogin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const loadKakaoSDK = () => {
      if (window.Kakao) {
        console.log('Kakao SDK already loaded');
        return;
      }
      const kakaoScript = document.createElement('script');
      kakaoScript.src = 'https://developers.kakao.com/sdk/js/kakao.min.js';
      kakaoScript.onload = () => {
        window.Kakao.init(REACT_APP_KAKAO_JS_KEY);
        console.log('Kakao SDK loaded');
      };
      kakaoScript.onerror = () => {
        console.error('Failed to load Kakao SDK');
      };
      document.head.appendChild(kakaoScript);
    };

    loadKakaoSDK();
  }, []);

  const handleLogin = () => {
    if (!window.Kakao) {
      console.error('Kakao SDK not loaded');
      return;
    }

    window.Kakao.Auth.login({
      success: function (authObj) {
        console.log('로그인 성공', authObj);
        window.Kakao.API.request({
          url: '/v2/user/me',
          success: function (res) {
            console.log('사용자 정보', res);
            axios.post('/api/auth/kakao', {
              kakaoId: res.id,
              email: res.kakao_account.email,
              nickname: res.properties.nickname,
              profileImageUrl: res.properties.profile_image,
            })
            .then(response => {
              console.log('서버 응답', response.data);
              // 로그인 성공 후 메인 페이지로 리디렉션
              navigate('/');
            })
            .catch(error => {
              console.error('서버 요청 실패', error);
            });
          },
          fail: function (error) {
            console.error('사용자 정보 요청 실패', error);
          },
        });
      },
      fail: function (err) {
        console.error('로그인 실패', err);
      },
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>카카오 로그인</button>
    </div>
  );
};

export default KakaoLogin;
