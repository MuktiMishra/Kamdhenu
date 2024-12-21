import Footer from './Components/Global/Footer'
import Header from './Components/Global/Header'
import AboutUs from './Pages/AboutUs'
import LandingPage from './Pages/LandingPage'
import Signup from './Components/Authentication/Signup'
import Login from './Components/Authentication/Login'
import Gallery from './Pages/Gallery'
import Programs from './Pages/Programs'
import ContactUs from './Pages/ContactUs'

function App() {
  

  return (
    <>
    <div className='w-full max-w-screen overflow-hidden'>
      <Header />
      <ContactUs />
      <Footer />

    </div>
      

        
    </>
  )
}

export default App
