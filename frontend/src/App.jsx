import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Listing from "./pages/Listing";
import TeacherDetail from "./pages/TeacherDetail";
import TeacherProfile from "./teacherProfile/pages/TeacherProfile";
import PersonalInformation from "./teacherProfile/components/PersonalInformation";
import ContactDetail from "./teacherProfile/components/ContactDetail";
import EducationInformation from "./teacherProfile/components/EducationInformation";
import AddNewEducation from "./teacherProfile/components/AddNewEducation";
import ICanTeach from "./teacherProfile/components/ICanTeach";
import AddNewICanTeach from "./teacherProfile/components/AddNewICanTeach";
import TeacherSchedule from "./teacherProfile/components/TeacherSchedule";
import PaymentPage from "./teacherProfile/components/PaymentPage";
import ReviewsPage from "./teacherProfile/components/ReviewsPage";
import MessagingApp from "./teacherProfile/components/MessagingApp";
import MessagingAppStd from "./studentProfile/components/MessagingApp";
import ManageStudents from "./teacherProfile/components/ManageStudents";
import StudentProfile from "./studentProfile/pages/StudentProfile";
import ProfileInformation from "./studentProfile/components/ProfileInformation";
import Tuitions from "./studentProfile/components/Tuitions";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./context/ProtectedRoute";
import SendInvitation from "./pages/SendInvitation";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Listing />} />
        <Route path="/teacherdetail/:teacherId" element={<TeacherDetail />} />
        <Route path="/login/:role" element={<Login />} />
        <Route path="/signup/:role" element={<Signup />} />
        <Route path="/resetpassword/:role" element={<ResetPassword />} />
        <Route path="/forgetpassword/:role" element={<ForgetPassword />} />
        <Route path="/sendinvitation/:teacherId" element={<SendInvitation />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute
              element={<TeacherProfile />}
              authrizedRole="teacher"
            />
          }
        >
          <Route index path="/profile" element={<PersonalInformation />} />
          <Route path="personalinformation" element={<PersonalInformation />} />
          <Route path="contactdetail" element={<ContactDetail />} />
          <Route
            path="educationinformation"
            element={<EducationInformation />}
          />
          <Route
            path="educationinformation/:educationId"
            element={<AddNewEducation />}
          />
          <Route
            path="educationinformation/addnew"
            element={<AddNewEducation />}
          />
          <Route path="icanteach" element={<ICanTeach />} />
          <Route path="icanteach/addnew" element={<AddNewICanTeach />} />
          <Route path="availability" element={<TeacherSchedule />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
          <Route path="messages" element={<MessagingApp />} />
          <Route path="managestudents" element={<ManageStudents />} />
        </Route>
        <Route
          path="/studentProfile"
          element={
            <ProtectedRoute
              element={<StudentProfile />}
              authrizedRole="student"
            />
          }
        >
          <Route
            index
            path="/studentProfile"
            element={<ProfileInformation />}
          />
          <Route
            index
            path="profileInformation"
            element={<ProfileInformation />}
          />
          <Route path="messages" element={<MessagingAppStd />} />
          <Route path="tuitions" element={<Tuitions />} />
        </Route>
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppRoute />
      </AuthProvider>
    </Router>
  );
}

export default App;
