import React from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Box, Typography, Grid, Button } from '@material-ui/core';

const date = moment().format('LLLL');

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: '#3E7E8C',
    height: '100%',
  },
  button: {
    backgroundColor: '#71D98B',
    color: 'white',
    margin: '5px',
    border: '1px solid white',
  },
  text: {
    color: 'white',
  },
}));

const ReportsHeader = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={6} md={4}>
          <Paper className={classes.paper}>
            <Box p={1}>
              <Typography variant="body2" className={classes.text}>
                Hello {props.username},
              </Typography>
              <Typography variant="body2" className={classes.text}>
                here are your reports!
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item md={8}>
          <Paper className={classes.paper}>
            <Box p={1}>
              <Typography
                variant="body2"
                align="right"
                className={classes.text}
              >
                {date} | {props.username}
              </Typography>

              <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="flex-end"
              >
                <Button className={classes.button} variant="contained">
                  DAY
                </Button>
                <Button className={classes.button} variant="contained">
                  WEEK
                </Button>
                <Button className={classes.button} variant="contained">
                  MONTH
                </Button>
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ReportsHeader;
