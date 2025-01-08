import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <div className="max-w-9xl max-w-auto pt-16 px-6">
    <HeroSection/>
   
        </div>
    </BrowserRouter>
    </>
  )
}

export default App
