import './App.css';
import Login from './Login';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import AccountForm from './components/AccountForm';
import AccountView from './components/AccountView';
import Transactions from './components/Transactions';
import MainRoute from './components/MainRoute';
function App() {


  return (
    <>
      <div>Account</div>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/accountForm' element={<MainRoute><AccountForm /></MainRoute>} />
          <Route path='/accountView' element={<MainRoute><AccountView /></MainRoute>} />
          <Route path='/transactions' element={<MainRoute><Transactions /></MainRoute>} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
