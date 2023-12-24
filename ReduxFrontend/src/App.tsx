import Login from './reduxComponents/Login';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import AccountForm from "./reduxComponents/AccountForm"
import AccountView from './reduxComponents/AccountView';
import Transactions from './reduxComponents/Transactions'
import MainRoute from "./reduxComponents/MainRoute"
import "./App.css"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/accountForm' element={<MainRoute><AccountForm /></MainRoute>} />
          <Route path='/accountView' element={<MainRoute><AccountView /></MainRoute>} />
          <Route path='/transactions' element={<MainRoute><Transactions /></MainRoute>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
