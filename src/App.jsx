import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'
import Home from "./Pages/Homepage/Home"
import Header from "./Component/Header"
import Footer from "./Component/Footer"
import CourseGrid  from "./Pages/Courses/CourseGrid";
import CourseDetail from "./Pages/Courses/CourseDetail";
import CourseCategory from "./Pages/Courses/CourseCategory"
import CourseList from "./Pages/Courses/CourseList"
import CourseResume from "./Pages/Courses/CourseResume"
import Cart from "./Pages/Cart/Cart"
import Checkout from "./Pages/Checkout/Checkout"
import AddCourse from "./Pages/Add Course/AddCourse"
import InstructorDashboard from "./Pages/Dashboard/Instructor Dashboard/InstructorDashboard"
import Profile from "./Pages/Dashboard/Instructor Dashboard/Profile"
import InstructorCourses from "./Pages/Dashboard/Instructor Dashboard/InstructorCourses"
import TutorSidebar from "./Component/TutorSidebar"
import Announcements from "./Pages/Dashboard/Instructor Dashboard/Announcements"
import Assignment from "./Pages/Dashboard/Instructor Dashboard/Assignment"
import StudentsGrid from "./Pages/Dashboard/Instructor Dashboard/StudentsGrid"
import StudentsList from "./Pages/Dashboard/Instructor Dashboard/StudentsList"
import Quiz from "./Pages/Dashboard/Instructor Dashboard/Quiz"
import QuizResults from "./Pages/Dashboard/Instructor Dashboard/QuizResults"
import Certificates from "./Pages/Dashboard/Instructor Dashboard/Certificates"
import Earnings from "./Pages/Dashboard/Instructor Dashboard/Earnings"
import Payouts from "./Pages/Dashboard/Instructor Dashboard/Payouts"
import Statements from "./Pages/Dashboard/Instructor Dashboard/Statements"
import Messages from "./Pages/Dashboard/Instructor Dashboard/Messages"
import Tickets from "./Pages/Dashboard/Instructor Dashboard/Tickets"
import Settings from "./Pages/Dashboard/Instructor Dashboard/Settings"
import Login from "./Pages/Auth/Login"
import ForgotPassword from "./Pages/Auth/ForgotPassword"
import SignUp from "./Pages/Auth/SignUp"
import OTP from "./Pages/Auth/OTP"
import ResetPassword from "./Pages/Auth/ResetPassword"
import LockScreen from "./Pages/Auth/LockScreen"
import StudentDashboard from "./Pages/Dashboard/Student Dashboard/StudentDashboard"
import StudentSidebar from "./Component/StudentSidebar"
import StudentProfile from "./Pages/Dashboard/Student Dashboard/StudentProfile"
import EnrolledCourses from "./Pages/Dashboard/Student Dashboard/EnrolledCourses"
import StudentCertificates from "./Pages/Dashboard/Student Dashboard/StudentCertificates"
import Wishlist from "./Pages/Dashboard/Student Dashboard/Wishlist"
import Reviews from "./Pages/Dashboard/Student Dashboard/Reviews"
import QuizAttempts from "./Pages/Dashboard/Student Dashboard/QuizAttempts"
import OrderHistory from "./Pages/Dashboard/Student Dashboard/OrderHistory"
import AboutUs from "./Pages/About Page/AboutUs"
import ContactUs from "./Pages/Contact  Page/ContactUs"
import Notifications from "./Pages/Notification page/Notifications"
import PricingPlan from "./Pages/Pricing-Plan-page/PricingPlan"
import FAQ from "./Pages/FAQ/FAQ"



function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/coursegrid" element={<CourseGrid />} />
        <Route path="/coursedetail" element={<CourseDetail />} />
        <Route path="/coursecategory" element={<CourseCategory />} />
        <Route path="/courselist" element={<CourseList />} /> 
        <Route path="/courseresume" element={<CourseResume />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/addcourse" element={<AddCourse />} />
        <Route path="/instructordashboard" element={<InstructorDashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/instructorcourses" element={<InstructorCourses />} />
        <Route path="/tutorsidebar" element={<TutorSidebar />} />
        <Route path="/announcement" element={<Announcements />} />
        <Route path="/assignment" element={<Assignment />} />
        <Route path="/studentsgrid" element={<StudentsGrid />} />
        <Route path="/studentslist" element={<StudentsList />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quizresults" element={<QuizResults />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/earnings" element={<Earnings />} />
        <Route path="/payouts" element={<Payouts />} />
        <Route path="statements" element={<Statements />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/lockscreen" element={<LockScreen />} />
        <Route path="/studentdashboard" element={<StudentDashboard />} />
        <Route path="/studentsidebar" element={<StudentSidebar />} />
        <Route path="/studentprofile" element={<StudentProfile />} />
        <Route path="/enrolledcourses" element={<EnrolledCourses />} />
        <Route path="/studentcertificates" element={<StudentCertificates />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/quizattempts" element={<QuizAttempts />} />
        <Route path="/orderhistory" element={<OrderHistory />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/pricingplan" element={<PricingPlan />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
     </Router>
    </>
  )
}

export default App
