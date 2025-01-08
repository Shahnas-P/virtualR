import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Features from './components/Features'
import Workflow from './components/Work-flow'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <div className="max-w-9xl max-w-auto pt-16 px-6">
    <HeroSection/>
   
        </div>
        <Features/>
        <Workflow/>
        <Pricing/>
        <Testimonials/>
        <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
