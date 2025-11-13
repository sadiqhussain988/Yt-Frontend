import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from "../src/pages/Home"
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';


const MainLayout = () => {
  return (
    <div className="overflow-x-hidden">
     
      <Navbar />
      <Outlet /> 
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home/> },
      { path: 'about', element: <About /> },
      
      // Services routes
      { path: 'services', element: <Services /> }, 
      { path: 'contact', element: <Contact /> },
      { path: 'abouts', element: <h1>helo im about here</h1> },
      
      

    ],
  },
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;






