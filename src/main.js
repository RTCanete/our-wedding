// src/Main.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import GuestList from './components/GuestList';
import AboutUs from './components/AboutUs';
import Schedule from './components/Schedule';
import Entourage from './components/Entourage';
import { Typography } from '@mui/material';

const Main = () => {
    const homeSectionStyle = {
        backgroundImage: `url('${process.env.PUBLIC_URL}/images/bg3.png')`,
        backgroundSize: 'contain', // Adjust this value
        backgroundPosition: 'right',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // Add other styles as needed
    };
    
    

    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div style={homeSectionStyle}>
                                <Typography color='#F8BCA9' fontSize='60px' fontWeight='bold'>Rico and Veronica</Typography>
                                {/* Add more content as needed */}
                            </div>
                        }
                    />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/guest-list" element={<GuestList />} />
                    <Route path="/schedule" element={<Schedule />} />
                    <Route path="/entourage" element={<Entourage />} />
                    {/* Add more routes as needed */}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default Main;