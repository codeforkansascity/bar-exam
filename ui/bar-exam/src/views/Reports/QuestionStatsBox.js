import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Box, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    height: 200,
    width: '100%',
    textAlign: 'center',
    margin: 'auto',
    padding: '3px',
    color: '#D9B448',
  },
}));

const QuestionStatsBox = (props) => {
  const classes = useStyles();
  return (
    <Box p={2}>
      <Paper className={classes.paper}>
        <h3>Average Questions {props.type} in a week</h3>
        <Typography variant="h1">{props.number}</Typography>
      </Paper>
    </Box>
  );
};

export default QuestionStatsBox;
