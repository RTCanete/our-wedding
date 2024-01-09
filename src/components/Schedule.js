import React from 'react';
import { Container, Typography } from '@mui/material';

const Schedule = () => {
    const customStyle = {
        fontFamily: 'Open Sans, sans-serif',// Example: Arial font family with fallback to sans-serif
        // Add other styles as needed
    };

    return (
        <>
            <Container style={{ marginTop: '2rem' }}>
                <Typography fontWeight='bold' variant="h4" style={customStyle}>Date:</Typography>
                <Typography variant="body1">APRIL 8, 2024 | 3:00PM | MONDAY</Typography>
            </Container>
            <br />
            <Container>
                <Typography fontWeight='bold' variant="h4" style={customStyle}>Schedule:</Typography>
                <Typography variant="body1">3:00 PM - CEREMONY</Typography>
                <Typography variant="body1">5:00 PM - RECEPTION</Typography>
            </Container>
            <br />
            <Container>
                <Typography fontWeight='bold' variant="h4" style={customStyle}>Location:</Typography>
                <Typography variant="body1">IGLESIA NG DIOS KAY CRISTO JESUS, HALIGI AT SUHAY NG KATOTOHANAN</Typography>
                <Typography variant="body1">BINANGONAN CHAPEL</Typography>
            </Container>
            <br />
            <Container>
                <Typography fontWeight='bold' variant="h4" style={customStyle}>Reception:</Typography>
                <Typography variant="body1">DA KUBO</Typography>
                <Typography variant="body1">GUIJO ST. DOÑA JUSTA VILLAGE, ANGONO, RIZAL 1930</Typography>
            </Container>
        </>
    );
};

export default Schedule;
