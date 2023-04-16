import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AddStaf from './AddStaf';
import FirstPage from './FirstPage';
import MainPage from './MainPage';
import NavBar from './NavBar';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default function App({ allStaf, user }) {
  return (
    <div>
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/mainpage" element={<MainPage allStaf={allStaf} user={user} />} />
        <Route path="/addstaf" element={<AddStaf />} />
      </Routes>
    </div>
  );
}
