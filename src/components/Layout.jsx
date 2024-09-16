

import React from 'react';
import { NavbarSimple } from './Navbar';
import { FooterWithLogo } from './Footer';
import { Outlet, useLocation } from 'react-router-dom';
import Home from '../pages/Home';

const Layout = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar at the top */}
      <NavbarSimple />

      {/* Conditional rendering of Home component for the root route */}
      {location.pathname === '/' && (
        <>
          <Home />
        </>
      )}

      {/* Main content area with auto height to adapt to the content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer at the bottom */}
      <FooterWithLogo />
    </div>
  );
};

export default Layout;