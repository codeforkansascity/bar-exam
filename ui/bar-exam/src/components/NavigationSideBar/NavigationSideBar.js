import React from 'react';
import { Link } from 'react-router-dom';

// MUI
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Box, Typography, Button } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: '#71D98B',

    margin: '5px',
    border: '3px solid white',
  },
  body: {
    backgroundColor: '#3E7E8C',
    padding: '5px',
  },
  paper: {
    width: '90%',
    margin: 'auto',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
}));

const NavigationSideBar = (props) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.body}>
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
      <Box p={2}>
        <Typography variant="h5" className={classes.text}>
          Welcome!
        </Typography>
      </Box>
      <Button className={classes.button} fullWidth={true}>
        <Link to="/profile" className={classes.link}>
          Profile
        </Link>
      </Button>
      <Button className={classes.button} fullWidth={true}>
        <Link to="/insights" className={classes.link}>
          Insights
        </Link>
      </Button>
      <Button className={classes.button} fullWidth={true}>
        <Link to="/mytasks" className={classes.link}>
          My Tasks
        </Link>
      </Button>
      <Button className={classes.button} fullWidth={true}>
        <Link to="/reports" className={classes.link}>
          Reports
        </Link>
      </Button>

      <br></br>

      <Button className={classes.button} fullWidth={true}>
        <Link to="/settings" className={classes.link}>
          Settings
        </Link>
      </Button>
      <Button className={classes.button} fullWidth={true}>
        <Link to="/troubleshoot" className={classes.link}>
          Troubleshoot
        </Link>
      </Button>
      <Button className={classes.button} fullWidth={true}>
        <Link to="/admin" className={classes.link}>
          Admin
        </Link>
      </Button>
    </Grid>
  );
};

export default NavigationSideBar;
