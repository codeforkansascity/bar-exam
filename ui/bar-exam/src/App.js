import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Components
import ReportsPage from './components/Reports/ReportsPage';
import NavigationSideBar from './components/NavigationSideBar/NavigationSideBar';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Grid, Paper, Box, Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    height: '100vh',
    width: '100%',
    padding: 3,
  },
}));

const App = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Hidden smDown>
            <Grid item xs={3} sm={3} md={3}>
              <Paper className={classes.paper}>
                {/* Navigation Side Bar Here */}
                <NavigationSideBar />
              </Paper>
            </Grid>
          </Hidden>
          <Grid item xs={12} sm={12} md={9}>
            <Paper className={classes.paper}>
              {/* Main Body of App here */}
              <ReportsPage />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default App;
