import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Experience from './pages/Experience'
import Navbar from './components/Navbar'
import Page2 from './pages/Page2'
import Footer from './pages/Footer'
import About from './pages/About'
import Projects from './pages/Projects'
import Pricing from './pages/Pricing'

const RootLayout = () => (
  <div className='overflow-x-hidden'>
    <Navbar />
    <Outlet />
    <Footer />
  </div>
)

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <div><Home /><Page2 /> <Projects /> <Pricing /><Experience /><About /><Contact /></div> },
        { path: 'Contact', element: <Contact /> },
        { path: 'Pricing', element: <Pricing /> },
        { path: 'Experience', element: <div><Experience /><Page2 /></div> },
        { path: 'About', element: <About /> },
        { path: 'Projects', element: <Projects /> },
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App


