import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Grid, Paper, Box, Typography, Button } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: '#71D98B',
    color: 'white',
    margin: '5px',
    border: '3px solid white',
  },
  body: {
    backgroundColor: '#3E7E8C',
  },
  paper: {
    width: '90%',
    margin: 'auto',
  },
}));

const NavigationSideBar = (props) => {
  const classes = useStyles();
  return (
    <Grid container sm={12} className={classes.body}>
      <Grid item sm={12}>
        <Box pt={3}>
          <Paper className={classes.paper}>
            <Skeleton
              className={classes.paper}
              variant="circle"
              height="180px"
              width="180px"
            />
          </Paper>
        </Box>
      </Grid>
      <Typography variant="h5" style={{ color: 'white' }}>
        Welcome!
      </Typography>
      <Button className={classes.button} fullWidth={true}>
        Profile
      </Button>
      <Button className={classes.button} fullWidth={true}>
        Insights
      </Button>
      <Button className={classes.button} fullWidth={true}>
        My Tasks
      </Button>
      <Button className={classes.button} fullWidth={true}>
        Reports
      </Button>
      <br></br>
      <Button className={classes.button} fullWidth={true}>
        Settings
      </Button>
      <Button className={classes.button} fullWidth={true}>
        Troubleshoot
      </Button>
      <Button className={classes.button} fullWidth={true}>
        Admin
      </Button>
    </Grid>
  );
};

export default NavigationSideBar;
