import React from "react";
import Header from '../components/Header'

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      <main className="w-[92%] mx-auto">{children}</main>
    </>
  );
};

export default Layout;
