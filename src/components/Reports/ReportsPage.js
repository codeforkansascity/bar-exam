import React from 'react';
import { Grid, Paper, Box } from '@material-ui/core';




const ReportsPage = (props) => {
    return (    
        <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
                <Paper>Question Stats Boxes Here</Paper>
            </Grid>
            <Grid item xs={12} md={8}>
                <Paper>Graph Components Here</Paper>
            </Grid>

        </Grid> )
};

export default ReportsPage;