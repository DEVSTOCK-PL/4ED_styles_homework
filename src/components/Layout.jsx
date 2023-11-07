/* eslint-disable react/prop-types */

import { Navbar } from './header/Navbar';
import { Footer } from './footer/Footer';

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
