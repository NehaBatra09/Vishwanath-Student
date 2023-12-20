import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { useAuth } from './Context';
import { DashBoard } from './DashBoard';

function App() {
  const { isAuthenticated } = useAuth();
  return (
    <>
      {!isAuthenticated ? <Login /> : <DashBoard />}
    </>
  );
}

export default App;
