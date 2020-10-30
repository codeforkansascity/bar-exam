import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Grid, Paper, Box, Typography } from '@material-ui/core';

// Chartjs-2
import { Line } from '@reactchartjs/react-chart.js';

const useStyles = makeStyles((theme) => ({
  paper: {
    height: 400,
    width: '100%',
    margin: 'auto',
    color: '#D9B448',
  },
}));

const dataLine = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
      yAxisID: 'y-axis-1',
    },
    {
      label: '# of No Votes',
      data: [1, 2, 1, 1, 2, 2],
      fill: false,
      backgroundColor: 'rgb(54, 162, 235)',
      borderColor: 'rgba(54, 162, 235, 0.2)',
      yAxisID: 'y-axis-2',
    },
  ],
};

const line_options = {
  scales: {
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
      },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-2',
        gridLines: {
          drawOnArea: false,
        },
      },
    ],
  },
};

// *************
const LineGraph = (props) => {
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
          <Paper className={classes.paper} style={{ height: '100%' }}>
            <Box p={1} align="center">
              <Line data={dataLine} options={line_options} />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LineGraph;
