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
          <Box>
            <Typography variant="h6">
              Hello Alexander, here are your reports!
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid
        container
        item
        md={8}
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item>
          <Button className={classes.button} variant="contained">
            DAY
          </Button>
        </Grid>
        <Grid item>
          <Button className={classes.button} variant="contained">
            WEEK
          </Button>
        </Grid>
        <Grid item>
          <Button className={classes.button} variant="contained">
            MONTH
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
