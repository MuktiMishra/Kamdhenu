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
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import AdminLogin from './Pages/admin/AdminLogin'
import Sidebar from './Components/admin/Sidebar'
import DataTable from './Pages/admin/DataTable'
import EducationForm from './Components/Application/EducationForm'
import SupportForm from './Components/Application/SupportForm'

function App() {
  

  return (
    <>
    <div className='w-full max-w-screen overflow-hidden'>
      {/* <Router>
        <Header />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/programs' element={<Programs />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/admin/login' element={<AdminLogin />} />
          <Route path='/admin/dashboard' element={<Sidebar />} />
        </Routes>
      </Router>
      <Footer /> */}

      <SupportForm />

      
      
      

      

      

    </div>
      

        
    </>
  )
}

export default App
