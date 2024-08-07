'use client';
import React, { useEffect } from 'react';
import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Navbar from './pages/Navbar';
import io from 'socket.io-client';

const inter = Inter({ subsets: ['latin'] });

export default function UserLayout({ children }) {
  useEffect(() => {
    const socket = io('http://localhost:3010'); // Ensure URL matches your Socket.IO server URL

    socket.on('bookingStatusUpdated', (booking) => {
      console.log(`Booking status updated to ${booking.status}`);
    });

    return () => {
      socket.off('bookingStatusUpdated');
      socket.disconnect();
    };
  }, []);

  console.log('Rendering UserLayout');

  return (
    <div className={inter.className}>
      <Navbar />
      <div className="main">
        {children}
      </div>
      <Footer />
    </div>
  );
}
