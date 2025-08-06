import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { Analytics } from '@vercel/analytics/react';
import { AppProvider } from './context/AppContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CookieConsent from './components/common/CookieConsent';
import AIChat from './components/ai/AIChat';
import Home from './pages/Home';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Cars from './pages/Cars';
import CarDetails from './pages/CarDetails';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import Profile from './pages/dashboard/Profile';
import BookInspection from './pages/inspections/BookInspection';
import CarCheckout from './pages/cars/CarCheckout';

function App() {
  return (
    <HelmetProvider>
      <AppProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/cars" element={<Cars />} />
                <Route path="/cars/:id" element={<CarDetails />} />
                <Route path="/cars/:id/checkout" element={<CarCheckout />} />
                <Route path="/inspections/book" element={<BookInspection />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/dashboard" element={<Dashboard />}>
                  <Route index element={<Profile />} />
                  <Route path="profile" element={<Profile />} />
                </Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <CookieConsent />
            <AIChat />
            <Toaster position="top-right" />
            <Analytics />
          </div>
        </Router>
      </AppProvider>
    </HelmetProvider>
  );
}

export default App;