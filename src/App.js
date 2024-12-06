import { Routes, Route } from 'react-router-dom';


import Homepage from './pages/Homepage/Homepage';

// Auth Pages
import RegisterOption from './pages/RegisterOption/RegisterOption';
import LoginOption from './pages/LoginOption/LoginOption';
import TutorLogin from './pages/Tutor/Login/Login';
import StudentLogin from './pages/Student/Login/Login';
import StudentRegister from './pages/Student/Register/Register';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';

// Student Pages
import StudentLayout from './pages/Student/Layout/Layout';
import StudentFindTutors from './pages/Student/FindTutors/FindTutors';
import StudentDashboard from './pages/Student/Dashboard/Dashboard';
import StudentCourses from './pages/Student/Courses/Courses';
import StudentCalender from './pages/Student/Schedule/Schedule';
import OnlineClass from "./pages/Student/OnlineClass/OnlineClass";
import WaitingRoom from './pages/Student/OnlineClass/WaitingRoom/WaitingRoom';
import TryLearning from "./pages/Student/OnlineClass/TryLearning/TryLearning";
import StudentStudyResults from './pages/Student/StudyResults/StudyResults';
import StudentPayment from './pages/Student/Payment/Payment';
import ChooseTutors from './pages/Student/FindTutors/ChooseTutors/ChooseTutors'
import CourseItem from './pages/Student/Courses/CourseItem/CourseItem';
import ClassDetail from './pages/Student/StudyResults/ClassDetail/ClassDetail';
import NewRequest from './pages/Student/FindTutors/NewRequest/NewRequest';
import Trial from './pages/Student/FindTutors/Trial/Trial';
import CourseConfirm from './pages/Student/FindTutors/CourseConfirm/CourseConfirm';

// Tutor Pages
import TutorDashboard from './pages/Tutor/Dashboard/Dashboard';
import TutorLayout from './pages/Tutor/Layout/Layout';
import TutorClassManagement from './pages/Tutor/ClassManagement/ClassManagement';
import TutorClassRegistration from './pages/Tutor/ClassRegistration/ClassRegistration';
import TutorTeachingSchedule from './pages/Tutor/TeachingSchedule/TeachingSchedule';
import TutorRevenue from './pages/Tutor/Revenue/Revenue';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login-option" element={<LoginOption />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/tutor-login" element={<TutorLogin />} />
        <Route path="/register-option" element={<RegisterOption />} />
        <Route path="/student-register" element={<StudentRegister />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/student-dashboard" element={<StudentLayout />}>
          <Route index element={<StudentDashboard />} />
          <Route path="find-tutors" element={<StudentFindTutors />} />
            <Route path="find-tutors/choose-tutors" element = {<ChooseTutors />} />
            <Route path="find-tutors/new-request" element = {<NewRequest />} />
            <Route path="find-tutors/trial" element = {<Trial />} />
            <Route path="find-tutors/confirm" element = {<CourseConfirm />} />
          <Route path="courses" element={<StudentCourses />} />
            <Route path="courses/course-item" element={<CourseItem />} />
          <Route path="schedule" element={<StudentCalender />} />
            <Route path="waiting-room" element={<WaitingRoom />} />
          <Route path="online-class" element={<OnlineClass />} />
            <Route path="try-learning" element={<TryLearning />} />
          <Route path="study-results" element={<StudentStudyResults />} />
            <Route path="study-results/classdetail" element={<ClassDetail />} />
          <Route path="payment" element={<StudentPayment />} />
        </Route>

        <Route path="/tutor-dashboard" element={<TutorLayout />}>
          <Route index element={<TutorDashboard />} />
          <Route path="class-management" element={<TutorClassManagement />} />
          <Route path="class-registration" element={<TutorClassRegistration />} />
          <Route path="teaching-schedule" element={<TutorTeachingSchedule />} />
          <Route path="revenue" element={<TutorRevenue />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;