import React from 'react';
import { Grid, Paper, Box } from '@material-ui/core';

// Components
import QuestionStatsBox from './QuestionStatsBox';
import GraphGroup from './GraphGroup';

const ReportsPage = (props) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Box p={2}>
          <Paper>Question Stats Boxes Here</Paper>
          <QuestionStatsBox type="answered" number="3" />
          <QuestionStatsBox type="graded" number="8" />
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
