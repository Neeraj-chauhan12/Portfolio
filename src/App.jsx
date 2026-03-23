import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Experience from './pages/Experience'
import Navbar from './components/Navbar'
import Page2 from './pages/Page2'
import Footer from './pages/Footer'
import About from './pages/About'
import Projects from './pages/Projects'
import Pricing from './pages/Pricing'
import FloatingButtons from './components/FloatingButtons'

const App = () => {
  return (
    <Router>
      <div className='overflow-x-hidden'>
        <Navbar />

        <Routes>
          <Route
            path='/'
            element={
              <>
                <Home />
                <Page2 />
                <Projects />
                <Pricing />
                <Experience />
                <About />
                <Contact />
              </>
            }
          />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Pricing' element={<Pricing />} />
          <Route path='/Experience' element={<Experience />} />
          <Route path='/About' element={<About />} />
          <Route path='/Projects' element={<Projects />} />
        </Routes>

        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  )
}

export default App


