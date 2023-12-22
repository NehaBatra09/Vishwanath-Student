import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { useAuth } from './Context';
import { DashBoard } from './DashBoard';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import AccountForm from './components/AccountForm';
import AccountView from './components/AccountView';
import Transactions from './components/Transactions';
import MainRoute from './components/MainRoute';
import Counter from './Redux/counter';
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Login} />
          <Route path='/accountForm' element={<MainRoute><AccountForm /></MainRoute>} />
          <Route path='/accountView' element={<MainRoute><AccountView /></MainRoute>} />
          <Route path='/transactions' element={<MainRoute><Transactions /></MainRoute>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
