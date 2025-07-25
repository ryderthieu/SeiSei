import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import StudentLogin from './pages/Student/Login/Login';
import StudentRegister from './pages/Student/Register/Register';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import VerificationCode from './pages/ForgotPassword/VerificationCode/VerificationCode';
import ResetPassword from './pages/ForgotPassword/ResetPassword/ResetPassword';
import SuccessResetPassword from './pages/ForgotPassword/SuccessResetPassword/SuccessResetPassword';
import StudentLayout from './pages/Student/Layout/Layout';
import StudentFindTutors from './pages/Student/FindTutors/FindTutors';
import StudentDashboard from './pages/Student/Dashboard/Dashboard';
import StudentCourses from './pages/Student/Courses/Courses';
import StudentCalender from './pages/Student/Schedule/Schedule';
import OnlineClass from "./pages/Student/OnlineClass/OnlineClass";
import WaitingRoom from './pages/Student/OnlineClass/WaitingRoom/WaitingRoom';
import TryLearning from "./pages/Student/OnlineClass/TryLearning/TryLearning";
import MeetingRoom from './pages/Student/OnlineClass/MeetingRoom/MeetingRoom';
import StudentStudyResults from './pages/Student/StudyResults/StudyResults';
import StudentPayment from './pages/Student/Payment/Payment';
import ChooseTutors from './pages/Student/FindTutors/ChooseTutors/ChooseTutors'
import CourseItem from './pages/Student/Courses/CourseItem/CourseItem';
import ClassDetail from './pages/Student/StudyResults/ClassDetail/ClassDetail';
import NewRequest from './pages/Student/FindTutors/NewRequest/NewRequest';
import Trial from './pages/Student/FindTutors/Trial/Trial';
import CourseConfirm from './pages/Student/FindTutors/CourseConfirm/CourseConfirm';
import Profile from './pages/Student/Profile/Profile';
import PaymentGateway from './pages/Student/Payment/PaymentGateway/PaymentGateway';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<StudentLogin />} />
        <Route path="/register" element={<StudentRegister />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="forgot-password/verification-code" element={<VerificationCode />} />
          <Route path="forgot-password/reset-password" element={<ResetPassword />}/>
          <Route path="forgot-password/success-reset-password" element={<SuccessResetPassword/>}/>

        <Route path="/dashboard" element={<StudentLayout />}>

          <Route index element={<StudentDashboard />} />

          <Route path="find-tutors" element={<StudentFindTutors />} />

            <Route path="find-tutors/choose-tutors/:id" element = {<ChooseTutors />} />
            <Route path="find-tutors/new-request" element = {<NewRequest />} />
            <Route path="find-tutors/trial/:id" element = {<Trial />} />
            <Route path="find-tutors/confirm/:id" element = {<CourseConfirm />} />

          <Route path="courses" element={<StudentCourses />} />
            <Route path="courses/course-item/:id" element={<CourseItem />} />

          <Route path="schedule" element={<StudentCalender />} />

          <Route path="online-class" element={<OnlineClass />} />
            <Route path="online-class/meeting-room" element={<MeetingRoom />} />
            <Route path="online-class/waiting-room" element={<WaitingRoom />} />
            <Route path="online-class/try-learning" element={<TryLearning />} />

          <Route path="study-results" element={<StudentStudyResults />} />
            <Route path="study-results/classdetail" element={<ClassDetail />} />

          <Route path="payment" element={<StudentPayment />} />
            <Route path='payment/gateway/:id' element ={<PaymentGateway />} />
            
          <Route path="profile" element={<Profile />}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;