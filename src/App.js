import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="dashboard">
     <BrowserRouter>
     <Routes>
         <Route path="/" element={<Dashboard />} />
         <Route path="/register" element={<Register />} />
         <Route path="/login" element={<Login />} />
         <Route path="/profile" element={<Navbar />} />
     </Routes>
     </BrowserRouter>
     <ToastContainer />
    </div>
  );
}

export default App;
