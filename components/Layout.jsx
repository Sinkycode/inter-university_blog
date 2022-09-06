import React from 'react';
import Header from './Header';
import LandingPage from './LandingPage';



const Layout = ({ children }) => (
  <>
    {/* {console.log(children.props.posts)} */}
    {children.props.posts ? <LandingPage /> : null}
    <Header />
    {children}
  </>
);

export default Layout;
