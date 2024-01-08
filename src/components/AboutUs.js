// src/AboutUs.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const AboutUs = () => {
    return (
        <section>
            <h2>About Us</h2>
            <p>Welcome to our wedding website. We are excited to share our love story with you!</p>
            <Link to="/">
                <Button variant='contained'>Go Back</Button>
            </Link>
            {/* Add more content as needed */}
        </section>
    );
};

export default AboutUs;
