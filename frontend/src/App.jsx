import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Orders from './components/Orders';
import Careers from './components/Careers';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import Toast from './components/Toast';
import { useState } from 'react';

export default function App() {
  const [toast, setToast] = useState({ message: '', type: '' });

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Amenities />
        <Gallery />
        <Orders showToast={showToast} />
        <Location showToast={showToast} />
        <Careers />
      </main>
      <Footer />
      <WhatsAppFloat />
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ message: '', type: '' })}
      />
    </>
  );
}
