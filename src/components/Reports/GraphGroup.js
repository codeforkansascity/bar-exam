import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Grid, Paper, Box, Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

const skeletonSize = 180;

const useStyles = makeStyles((theme) => ({
  paper: {
    height: 200,
    width: '100%',
    margin: 'auto',
    color: '#D9B448',
  },
}));

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
              <Skeleton
                variant="circle"
                width={skeletonSize}
                height={skeletonSize}
              />
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
