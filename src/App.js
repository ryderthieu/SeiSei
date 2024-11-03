import { Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage/Homepage';
import LoginHV from './pages/LoginHV/Login';
import Register from './pages/RegisterHV/Register';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import FindTutors from './pages/FindTutors/FindTutors';
import Layout from './pages/Layout/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import LoginOption from './pages/LoginOption/LoginOption';
import RegisterOption from './pages/RegisterOption/RegisterOption';
import LoginGS from './pages/LoginGS/LoginGS';
import Courses from './pages/Courses/Courses';
import Calender from './pages/Calender/Calender';
import StudyResults from './pages/StudyResults/StudyResults';
import Payment from './pages/Payment/Payment';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login-option" element={<LoginOption />} />
        <Route path="/loginHV" element={<LoginHV />} />
        <Route path="/loginGS" element={<LoginGS />} />
        <Route path="/register-option" element={<RegisterOption />} />
        <Route path="/registerHV" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="find-tutors" element={<FindTutors />} />
          <Route path="courses" element={<Courses />} />
          <Route path="calender" element={<Calender />} />
          <Route path="study-results" element={<StudyResults />} />
          <Route path="payment" element={<Payment />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;