// src/Footer.js
import React from 'react';
import { Container, Stack, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Container>
            <Stack alignItems='center' style={{ position: 'fixed', bottom: 0 }}>
                <Typography variant="body2">&copy; 2024 Our Wedding. All rights reserved.</Typography>
            </Stack>
            {/* Add more footer content as needed */}
        </Container>
    );
};

export default Footer;
