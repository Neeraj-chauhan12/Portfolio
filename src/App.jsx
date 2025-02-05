import React from 'react'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Navbar from './components/Navbar';
import Page2 from './pages/Page2';
import Footer from './pages/Footer';
import About from './pages/About';


const App = () => {

 const router = createBrowserRouter(
    [
      {
        path:"/",
        element:<div>
           <Navbar />
          <Home />
          <Experience />
          <Page2 />
          <Contact /> 
          <Footer />  
          <About />
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
