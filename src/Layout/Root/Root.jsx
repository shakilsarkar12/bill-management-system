import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Component/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar />
            <main className='min-h-screen'>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default Root;