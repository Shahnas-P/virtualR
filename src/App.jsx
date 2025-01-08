import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Features from './components/Features'
function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <div className="max-w-9xl max-w-auto pt-16 px-6">
    <HeroSection/>
   
        </div>
        <Features/>
    </BrowserRouter>
    </>
  )
}

export default App
