import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './pages/home/Home.jsx'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx'
import Footer from './Components/Footer/Footer.jsx'
import { createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom'
import LoginPopup from './Components/LoginPopup/LoginPopup.jsx'
import Cart from './pages/Cart/Cart.jsx'

/*const Layout = () => (
  <div>
    <>
    <Navbar setShowLogin={setShowLogin} />
      <Outlet />
      <Footer/>
    </>
  </div>
);*/

// eslint-disable-next-line react/prop-types
const Layout = ({setShowLogin }) => {
  return (
    <>
      <Navbar setShowLogin={setShowLogin} /> {/* Pass prop to Navbar */}
      <Outlet /> {/* Routed content */}
      <Footer />
    </>
  );
};


const App = () => {
  const [showLogin,setShowLogin]=useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout setShowLogin={setShowLogin} />, // Pass prop to Layout
      children: [
        { path: "/", element: <Home /> },
        {path:"Cart",element :<Cart />,},
        {path:"/Cart/Order", element: <PlaceOrder />}

        
      ],
    },
  ]);

  return (
    <>
    {showLogin?<LoginPopup setShowLogin = {setShowLogin} />:<></>}
    <div className='app' >
    <RouterProvider router={router}/>
    </div>
    </>
  )
}

export default App
