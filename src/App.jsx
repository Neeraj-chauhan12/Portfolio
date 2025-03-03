import React from 'react'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Navbar from './components/Navbar';
import Page2 from './pages/Page2';
import Footer from './pages/Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';


const App = () => {

 const router = createBrowserRouter(
    [
      {
        path:"/",
        element:
        <div>
           <Navbar />
          <Home />
          <Page2 />
          <Portfolio />
          <Experience />
          <About />
          <Contact /> 
          <Footer />  
           </div> 
           
         
        
    },
    {
        path:"/Contact",
        element:<div>
          <Navbar />
          <Contact />
          <Footer />
        
        </div>   
    },
    {
      path:"/Experience",
      element:<div>
          <Navbar />
          <Experience />
          <Page2 />
          <Footer />
  
        </div>   
    },
    {
      path:"/About",
      element:<div>
          <Navbar />
          <About />
          <Footer />
  
        </div>   
    },
    {
      path:"/Portfolio",
      element:<div>
          <Navbar />
          <Portfolio />
          <Footer />
  
        </div>   
    }

    ]
  )

  return (
    <div className='overflow-x-hidden'>
      <RouterProvider router={router} />
    
      
      
    </div>
  )
}

export default App
