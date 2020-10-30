import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Grid, Paper, Box, Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

// Chartjs-2
import { Pie } from '@reactchartjs/react-chart.js';

const skeletonSize = 180;

const useStyles = makeStyles((theme) => ({
  paper: {
    height: 200,
    width: '100%',
    margin: 'auto',
    color: '#D9B448',
  },
}));

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const GraphGroup = (props) => {
  const classes = useStyles();

  return (
    <Box p={2}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            Usage Graphs
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Box p={1} align="center">
              <Pie width="100%" data={data} />
              {/* <Skeleton
                variant="circle"
                width={skeletonSize}
                height={skeletonSize}
              /> */}
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Box p={1} align="center">
              <Skeleton
                variant="rect"
                width={skeletonSize}
                height={skeletonSize}
              />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={12}>
          <Paper className={classes.paper} style={{ width: '100%' }}>
            <Box p={1} align="center">
              <Skeleton variant="rect" width="100%" height={skeletonSize} />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GraphGroup;
