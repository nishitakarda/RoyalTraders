import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Login from './pages/Login';
import PlaceOrder from './pages/PlaceOrder';
import Orders from './pages/Orders';
import NutsAndDryFruitsPage from './pages/NutsAndDryFruitsPage';
import DatesPage from './pages/DatesPage';
import RoyalExclusivesPage from './pages/RoyalExclusivesPage';
import BerriesPage from './pages/BerriesPage';
import SeedsPage from './pages/SeedsPage';
import ProductDetail from './pages/ProductDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const App = () => {

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[1vw]'>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/product/nuts-dry-fruits' element={<NutsAndDryFruitsPage />} />
        <Route path='/product/dates' element={<DatesPage />} />
        <Route path='/product/royals-exclusives' element={<RoyalExclusivesPage />} />
        <Route path='/product/berries' element={<BerriesPage />} />
        <Route path='/product/seeds-more' element={<SeedsPage />} />
        <Route path="/product/:category/:id" element={<ProductDetail />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
