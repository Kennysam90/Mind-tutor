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
import ComingSoon from "./Pages/Coming Soon/ComingSoon"
import Construction from "./Pages/Under Construction/Construction"
import Conditions from "./Pages/Terms and Conditions/Conditions"
import PrivacyPolicy from "./Pages/Privacy Policy/PrivacyPolicy"
import BlogGrid from "./Pages/Blog Page/BlogGrid"
import BlogDetails from "./Pages/Blog Page/BlogDetails"
import Error404 from "./Pages/Error Page/Error404"
import ServerError from "./Pages/Error Page/ServerError"
import ChangePassword from "./Pages/Dashboard/Instructor Dashboard/ChangePassword"
import Plans from "./Pages/Dashboard/Instructor Dashboard/Plans"
import SettingTopbar from "./Component/SettingTopbar"
import SocialProfiles from "./Pages/Dashboard/Instructor Dashboard/SocialProfiles"
import LinkedAccount from "./Pages/Dashboard/Instructor Dashboard/LinkedAccount"
import InstructorNotifications from "./Pages/Dashboard/Instructor Dashboard/InstructorNotifications"
import Integrations from "./Pages/Dashboard/Instructor Dashboard/Integrations"
import Withdraw from "./Pages/Dashboard/Instructor Dashboard/Withdraw"
import StudentSettings from "./Pages/Dashboard/Student Dashboard/StudentSettings"
import StudentMessage from "./Pages/Dashboard/Student Dashboard/StudentMessage"
import StudentTicket from "./Pages/Dashboard/Student Dashboard/StudentTicket"
import Security from "./Component/Security"
import SocialPlan from "./Component/SocialPlan"
import Accounts from "./Component/Accounts"
import PasswordChange from "./Pages/Dashboard/Student Dashboard/PasswordChange"
import StudentTopbar from "./Component/StudentTopbar"
import MediaProfile from "./Pages/Dashboard/Student Dashboard/MediaProfile"
import StudentAccounts from "./Pages/Dashboard/Student Dashboard/StudentAccounts"
import StudentNotifications from "./Pages/Dashboard/Student Dashboard/StudentNotifications"
import BillingAddress from "./Pages/Dashboard/Student Dashboard/BillingAddress"



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
        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route path="/construction" element={<Construction />} />
        <Route path="/conditions" element={<Conditions />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/bloggrid" element={<BlogGrid />} />
        <Route path="/blogdetails" element={<BlogDetails />} />
        <Route path="/error404" element={<Error404 />} />
        <Route path="/servererror" element={<ServerError />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/settingtopbar" element={<SettingTopbar />} />
        <Route path="/socialprofiles" element={<SocialProfiles />} />
        <Route path="/linkedaccounts" element={<LinkedAccount />} />
        <Route path="/instructornotifications" element={<InstructorNotifications />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/studentsettings" element={<StudentSettings />} />
        <Route path="/studentmessage" element={<StudentMessage />} />
        <Route path="/studentticket" element={<StudentTicket />} />
        <Route path="/security" element={<Security />} />
        <Route path="socialplan" element={<SocialPlan />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/passwordchange" element={<PasswordChange />} />
        <Route path="/studenttopbar" element={<StudentTopbar />} />
        <Route path="/mediaprofile" element={<MediaProfile />} />
        <Route path="/studentaccounts" element={<StudentAccounts />} />
        <Route path="/studentnotifications" element={<StudentNotifications />} />
        <Route path="/billingaddress" element={<BillingAddress />} />
      </Routes>
     </Router>
    </>
  )
}

export default App
