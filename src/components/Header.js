// src/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, AppBar, Toolbar } from '@mui/material';

const Header = () => {
    const headerStyle = {
        backgroundColor: '#33BBFF', // Replace with your preferred color code
    };
    return (
        <header>

            <AppBar position="sticky" style={headerStyle}>
                <Toolbar>
                    <Typography fontWeight='bold' variant="h3" component="div" sx={{ flexGrow: 1 }}>
                        Our Wedding
                    </Typography>
                    <Button style={{ fontWeight: 'bold', fontSize: '1rem' }} color="inherit" component={Link} to="/">
                        Home
                    </Button>
                    <Button style={{ fontWeight: 'bold', fontSize: '1rem' }} color="inherit" component={Link} to="/schedule">
                        Schedule
                    </Button>
                    <Button style={{ fontWeight: 'bold', fontSize: '1rem' }} color="inherit" component={Link} to="/entourage">
                        Entourage
                    </Button>
                    <Button style={{ fontWeight: 'bold', fontSize: '1rem' }} color="inherit" component={Link} to="/guest-list">
                        Guest List
                    </Button>
                    <Button style={{ fontWeight: 'bold', fontSize: '1rem' }} color="inherit" component={Link} to="/gallery">
                        Gallery
                    </Button>
                </Toolbar>
            </AppBar>
        </header>
    );
};

export default Header;
