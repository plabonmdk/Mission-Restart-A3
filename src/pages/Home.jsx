import React from 'react';
import Navbar from '../component/navbar';
import Banner1 from './Banner1';
import Banner2 from './Banner2';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer';

const Home = () => {
    return (
        <div>
            
            <Banner1></Banner1>
            <Banner2></Banner2>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;