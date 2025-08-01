import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { AppProvider } from './context/AppContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CookieConsent from './components/common/CookieConsent';
import AIChat from './components/ai/AIChat';
import Home from './pages/Home';
import About from './pages/About';
import FAQ from './pages/FAQ';

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
                {/* More routes will be added as we build more pages */}
              </Routes>
            </main>
            <Footer />
            <CookieConsent />
            <AIChat />
            <Toaster position="top-right" />
          </div>
        </Router>
      </AppProvider>
    </HelmetProvider>
  );
}

export default App;