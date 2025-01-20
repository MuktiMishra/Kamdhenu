import Footer from './Components/Global/Footer'
import Header from './Components/Global/Header'
import AboutUs from './Pages/AboutUs'
import LandingPage from './Pages/LandingPage'
import Signup from './Components/Authentication/Signup'
import Login from './Components/Authentication/Login'
import Gallery from './Pages/Gallery'
import Programs from './Pages/Programs'
import ContactUs from './Pages/ContactUs'
import Testimonials from './Pages/Testimonials'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import AdminLogin from './Pages/admin/AdminLogin'
import AdminDashboard from './Pages/admin/AdminDashboard'
import ProtectedRoute from './Components/Authentication/ProtectedRoute'
import AddNewStaff from './Components/admin/AddNewStaff'

function AppContent() {
  const location = useLocation()


  const isAdminRoute = location.pathname.startsWith('/admin')

  return (
    <div className="w-full max-w-screen overflow-hidden">
     
      {!isAdminRoute && <Header />}

      <Routes>
        
        <Route path="/" element={<LandingPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/testimonials" element={<Testimonials />} />

        
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
        <Route path="/admin/addStaff" element={<ProtectedRoute><AddNewStaff /></ProtectedRoute>}/>
      </Routes>
      <ToastContainer />

      {!isAdminRoute && <Footer />}
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
