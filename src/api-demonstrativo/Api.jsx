import React from 'react';
import UserPost from './endpoints/UserPost';
import TokenPost from './endpoints/TokenPost';
import PhotoPost from './endpoints/PhotoPost';
import PhotoGet from './endpoints/PhotoGet';

// Aula demonstrativa de como funciona a API que vai ser utilizada no projeto
// Futuramento vou cirar o meu proprio e trocar no projeto

const Api = () => {
  return <div>
    <h2>USER POST</h2>
    <UserPost />
    <h2>USER POST</h2>
    <TokenPost />
    <h2>PHOTO POST</h2>
    <PhotoPost />
    <h2>PHOTO GET</h2>
    <PhotoGet />
  </div>;
};

export default Api;