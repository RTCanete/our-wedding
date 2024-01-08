// src/RSVP.js
import React from 'react';
import { Grid, Container, Typography } from '@mui/material';

const GuestList = () => {

    return (
        <>
            <Container style={{ marginTop: '3rem' }}>
                <Grid container>
                    <Grid item xs={6}>
                        <Typography fontWeight='bold' variant="h4">Bride's Guest:</Typography>
                        <Typography fontWeight='bold' variant="h5">Family:</Typography>
                        <Typography variant="body1">VINCENT RODRIGUEZ</Typography>
                        <Typography variant="body1">LAWRENCE RODRIGUEZ</Typography>
                        <Typography variant="body1">ROMEL RODRIGUEZ</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography fontWeight='bold' variant="h4">Groom's Guest:</Typography>
                        <Typography fontWeight='bold' variant="h5">Family:</Typography>
                        <Typography variant="body1">ROLANDO CAÑETE & RODESSA ANN CAÑETE</Typography>
                        <Typography variant="body1">MARK RYAN CAÑETE & MIKAELA CAÑETE</Typography>
                        <Typography variant="body1">REGGIE CAÑETE</Typography>
                        <Typography variant="body1">RUWEN CAÑETE</Typography>
                    </Grid>
                </Grid>

                <Grid container mt='2rem'>
                    <Grid item xs={6}>
                        <Typography fontWeight='bold' variant="h5">Relatives:</Typography>
                        <Typography variant="body1">CHRISTIAN MORONDOS</Typography>
                        <Typography variant="body1">CORAZON MORONDOS</Typography>
                        <Typography variant="body1">MANNY DE GUZMAN</Typography>
                        <Typography variant="body1">MELBA DE GUZMAN</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography fontWeight='bold' variant="h5">Relatives:</Typography>
                        <Typography variant="body1">DOUGLAS CAÑETE</Typography>
                        <Typography variant="body1">MAGELLAN CAÑETE</Typography>
                        <Typography variant="body1">RALF LOWIE MONTALA</Typography>
                        <Typography variant="body1">DJHAY BOY ORO</Typography>
                        <Typography variant="body1">AIDA TOCMO</Typography>
                        <Typography variant="body1">RAMIL TOCMO</Typography>
                        <Typography variant="body1">ALLAN BORGA</Typography>
                        <Typography variant="body1">ROSE BORGA</Typography>
                        <Typography variant="body1">JULIE TOCMO</Typography>
                    </Grid>
                </Grid>

                <Grid container mt='2rem'>
                    <Grid item xs={6}>
                        <Typography fontWeight='bold' variant="h5">Friends:</Typography>
                        <Typography variant="body1">ANGELICA SAN ANTONIO</Typography>
                        <Typography variant="body1">ALYSSA ONG</Typography>
                        <Typography variant="body1">B-JAY DIONISIO</Typography>
                        <Typography variant="body1">JERSON DE JESUS</Typography>
                        <Typography variant="body1">LOUISE REQUIMIN</Typography>
                        <Typography variant="body1">RJ NICOMEDES</Typography>
                        <Typography variant="body1">RAYMART DESANO</Typography>
                        <Typography variant="body1">ROCHELLE LAURETA</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography fontWeight='bold' variant="h5">Friends:</Typography>
                        <Typography variant="body1">ALVIN ASPORIA</Typography>
                        <Typography variant="body1">ALBERT JOHN FLAMINIANO</Typography>
                        <Typography variant="body1">EMMANUEL GUTIERREZ</Typography>
                        <Typography variant="body1">JONATHAN FLAMINIANO</Typography>
                        <Typography variant="body1">JOHN MARVIN OREJANA</Typography>
                        <Typography variant="body1">JAN NATHANIEL BUCAY</Typography>
                        <Typography variant="body1">RYAN PAOLO JOSON</Typography>
                        <Typography variant="body1">SUSAN UEJIMA</Typography>
                        <Typography variant="body1">SAHEL NARIZ</Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default GuestList;
