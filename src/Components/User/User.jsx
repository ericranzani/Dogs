import React from 'react';
import UserHeader from './UserHeader';
import UserStats from './UserStats';
import Feed from '../Feed/Feed';
import UserPhotoPost from './UserPhotoPost'
import { Route, Routes } from 'react-router-dom';

const User = () => {
  return (
    <section className='container'>
      <UserHeader />
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='postar' element={<UserPhotoPost />} />
        <Route path='estatisticas' element={<UserStats />} />
      </Routes>
    </section>
  );
};

export default User;