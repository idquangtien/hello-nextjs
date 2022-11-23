import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

const PrimaryLayout = ({ children }) => {
    return (
        <>
            <div className='d-flex flex-col min-h-100vh'>
                <Header />
                <main className='flex-1'>{children}</main>
                <Footer />
            </div>
            <Sidebar/>
        </>

    );
};

export default PrimaryLayout;