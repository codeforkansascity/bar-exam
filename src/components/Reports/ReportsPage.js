import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Grid, Paper, Box } from '@material-ui/core';

// Components
import QuestionStatsBox from './QuestionStatsBox';
import GraphGroup from './GraphGroup';

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: '#3E7E8C',
  },
}));

const ReportsPage = (props) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Box p={2}>
          <Paper className={classes.paper}>
            Question Stats Boxes Here
            <QuestionStatsBox type="answered" number="3" />
            <QuestionStatsBox type="graded" number="8" />
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={12} md={8}>
        <Box p={2}>
          <Paper>Graph Components Here</Paper>
          <GraphGroup />
        </Box>
      </Grid>
    </Grid>
  );
};

export default ReportsPage;
