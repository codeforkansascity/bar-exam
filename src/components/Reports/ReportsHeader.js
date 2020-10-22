import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Box, Typography, Grid, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: '#3E7E8C',
  },
  button: {
    backgroundColor: '#71D98B',
    color: 'white',
  },
}));

const Header = (props) => {
  const classes = useStyles();

  return (
    <Grid container spacing={5}>
      <Grid item xs={6} md={4}>
        <Paper className={classes.paper}>
          <Typography variant="h6">
            Hello Alexander, here are your reports!
          </Typography>
        </Paper>
      </Grid>

      <Grid
        container
        md={8}
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
    </Grid>
  );
};

export default Header;
