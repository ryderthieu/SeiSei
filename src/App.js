import { Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage/Homepage';
import Login from './pages/LoginHV/Login';
import Register from './pages/Register/Register';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import ClassRegister from './pages/ClassRegister/ClassRegister';
import Layout from './pages/Layout/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import LoginOption from './pages/LoginOption/LoginOption';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login-option" element={<LoginOption />} />
        <Route path="/loginHV" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="dang-ky-lop" element={<ClassRegister />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;