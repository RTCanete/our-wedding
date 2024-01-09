import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import GuestList from './components/GuestList';
import Schedule from './components/Schedule';
import Entourage from './components/Entourage';
import Gallery from './components/Gallery';
import { Typography } from '@mui/material';

const Main = () => {
    return (
        <Router>
            <div style={{ position: 'relative' }}>
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div style={{
                                minHeight: '100vh',
                                backgroundImage: `url('${process.env.PUBLIC_URL}/images/bg4.gif')`,
                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat', // Do not repeat the background image
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'relative',
                            }}>
                                <Typography
                                    variant="h2"
                                    style={{
                                        position: 'absolute',
                                        top: 0, // Adjust the vertical position as needed
                                        color: '#309DFF',
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                        textTransform: 'uppercase',
                                        marginTop: '.5rem'
                                    }}
                                >
                                    Rico and Veronica Wedding
                                </Typography>
                                {/* Add more content as needed */}
                            </div>
                        }
                    />
                    <Route path="/schedule" element={<Schedule />} />
                    <Route path="/entourage" element={<Entourage />} />
                    <Route path="/guest-list" element={<GuestList />} />
                    <Route path="/gallery" element={<Gallery />} />
                    {/* Add more routes as needed */}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default Main;
