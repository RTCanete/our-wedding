// src/Schedule.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const Schedule = () => {
    return (
        <>
            <Container style={{ marginTop: '2rem' }}>
                <Typography fontWeight='bold' variant="h4">Date:</Typography>
                <Typography variant="body1">APRIL 8, 2024 | 9:00AM | MONDAY</Typography>
            </Container>
            <br />
            <Container>
                <Typography fontWeight='bold' variant="h4">Schedule:</Typography>
                <Typography variant="body1">9:00 AM - CEREMONY</Typography>
                <Typography variant="body1">12:00 PM - RECEPTION</Typography>
            </Container>
            <br />
            <Container>
                <Typography fontWeight='bold' variant="h4">Location:</Typography>
                <Typography variant="body1">IGLESIA NG DIOS KAY CRISTO JESUS, HALIGI AT SUHAY NG KATOTOHANAN</Typography>
                <Typography variant="body1">BINANGONAN CHAPEL</Typography>
            </Container>
        </>
    );
};

export default Schedule;
