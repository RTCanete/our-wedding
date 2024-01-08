// src/Entourage.js
import React from 'react';
import { Container, Grid, Typography } from '@mui/material';

const Entourage = () => {
    return (
        <>
            <Container style={{ marginTop: '3rem' }}>
                <Grid container>
                    <Grid item xs={4}>
                        <Typography fontWeight='bold' variant="h4">Bride:</Typography>
                        <Typography variant="body1">VERONICA RODRIGUEZ</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography fontWeight='bold' variant="h4">Groom:</Typography>
                        <Typography variant="body1">RICO CAÑETE</Typography>
                    </Grid>
                </Grid>

                <Grid container mt='2rem'>
                    <Grid item xs={4}>
                        <Typography fontWeight='bold' variant="h4">Parents of the Bride:</Typography>
                        <Typography variant="body1">JESUS RODRIGUEZ JR.</Typography>
                        <Typography variant="body1">IMELDA RODRIGUEZ</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography fontWeight='bold' variant="h4">Parents of the Groom:</Typography>
                        <Typography variant="body1">ROLANDO CAÑETE SR.</Typography>
                        <Typography variant="body1">LORNA CAÑETE</Typography>
                    </Grid>
                </Grid>

                <Grid container mt='2rem'>
                    <Grid item xs={12}>
                        <Typography marginLeft='5rem' fontWeight='bold' variant="h4">Principal Witnesses:</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography fontWeight='bold' variant="h4">Ninong:</Typography>
                        <Typography variant="body1">JESS ANTONIO</Typography>
                        <Typography variant="body1">RONELIO TOCMO</Typography>
                        <Typography variant="body1">MARION CARIÑO</Typography>
                        <Typography variant="body1">ELMAR SARTE</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography fontWeight='bold' variant="h4">Ninang:</Typography>
                        <Typography variant="body1">MARISA LEGASPI</Typography>
                        <Typography variant="body1">MELITA FIDEL</Typography>
                        <Typography variant="body1">CAROL FLORES</Typography>
                        <Typography variant="body1">MARICAR MAGPANTAY</Typography>
                    </Grid>
                </Grid>

                <Grid container mt='2rem'>
                    <Grid item xs={4}>
                        <Typography fontWeight='bold' variant="h4">Best Man:</Typography>
                        <Typography variant="body1">DANIEL DAVE TOCMO</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography fontWeight='bold' variant="h4">Maid of Honor:</Typography>
                        <Typography variant="body1">JOHANIE MARANAN</Typography>
                    </Grid>
                </Grid>

                <Grid container mt='2rem'>
                    <Grid item xs={4}>
                        <Typography fontWeight='bold' variant="h4">Groomsmen:</Typography>
                        <Typography variant="body1">JOEMARK LEGASPI</Typography>
                        <Typography variant="body1">ARMANDO PESIGAN</Typography>
                        <Typography variant="body1">RENATO EREVE</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography fontWeight='bold' variant="h4">Bridesmaids:</Typography>
                        <Typography variant="body1">DANICA TOCMO</Typography>
                        <Typography variant="body1">JERRELYN HERNANDEZ</Typography>
                        <Typography variant="body1">AIFRYL BLANCO</Typography>
                    </Grid>
                </Grid>

                <Grid container mt='2rem' mb='3rem'>
                    <Grid item xs={4}>
                        <Typography fontWeight='bold' variant="h4">Bible Bearer:</Typography>
                        <Typography variant="body1">RYKKO MATEO CAÑETE</Typography>
                        <Typography variant="body1">XAVIEN KHALIX CAÑETE</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography fontWeight='bold' variant="h4">Flower Girl:</Typography>
                        <Typography variant="body1">YUUNA ANN CAÑETE</Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Entourage;
