import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Grid, Paper, Box } from '@material-ui/core';

// Components
import QuestionStatsBox from './QuestionStatsBox';
import GraphGroup from './GraphGroup';
import ReportsHeader from './ReportsHeader';
import PieChart from '../../components/PieChart';
import LineGraph from '../../components/LineGraph';
import BarChart from '../../components/BarChart';

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: '#3E7E8C',
    padding: '5px',
  },
  body: {
    paddingTop: '15px',
  },
}));

const ReportsPage = (props) => {
  const classes = useStyles();

  return (
    <Grid container spacing={1} className={classes.body}>
      <Grid item xs={12}>
        <Box p={1}>
          <ReportsHeader username="Alexander" />
        </Box>
      </Grid>
      <Grid item xs={6} sm={5} md={4}>
        <Box p={1}>
          <Paper className={classes.paper}>
            {/* Question Stats Boxes Here */}
            <QuestionStatsBox type="answered" number="3" />

            <QuestionStatsBox type="graded" number="8" />
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={6} sm={7} md={8}>
        <Box p={2}>
          <Paper>
            {/* Graph Components Here */}

            <GraphGroup />
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ReportsPage;
