import React from 'react';
import { Grid, Box, TextField, Button, Card, Typography } from '@mui/material';
import unclechaseDon from '../images/unclechaseDon.png';
const Donation = () => {
    return (
    
        <Box textAlign="center">

            <Typography variant='h2' gutterbottom color="secondary" align="center">
                Want to Support Your First Ammendment Rights? Donate Here
                        
            </Typography>
            <Button variant="outlined" color="secondary">$1.00</Button>
            <Button variant="outlined" color="secondary">$5.00</Button>
            <Button variant="outlined" color="secondary">$10.00</Button>
            <div><img textAlign="center" src={unclechaseDon}></img></div>
            
            
        </Box>
       
    );
}

export default Donation;