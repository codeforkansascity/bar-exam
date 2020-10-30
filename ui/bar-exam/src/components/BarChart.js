import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Grid, Paper, Box, Typography } from '@material-ui/core';

// Chartjs-2
import { HorizontalBar } from '@reactchartjs/react-chart.js';

const useStyles = makeStyles((theme) => ({
  paper: {
    height: 400,
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
        '#3E7E8C',
        '#D9B448',
        '#71D98B',
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
// ***************

const bar_1_options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

// *************
const BarChart = (props) => {
  const classes = useStyles();

  return (
    <Box p={1}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            Usage Graphs
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Box p={1} align="center">
              <HorizontalBar data={data} options={bar_1_options} width="100%" />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BarChart;
