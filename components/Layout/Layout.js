import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Nav from '../Shared/Nav/Nav';

const Layout = ({children}) => {
    return (
        <>
            <Nav></Nav>
            <main>{children}</main>
            <Footer></Footer>
        </>
    );
};

export default Layout;