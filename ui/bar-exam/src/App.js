import React from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';

// MUI
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Grid, Paper, Hidden } from '@material-ui/core';

// Components
import ReportsPage from './components/Reports/ReportsPage';
import Profile from './components/Profile/Profile';
import NavigationSideBar from './components/NavigationSideBar/NavigationSideBar';
import Insights from './components/Insights/Insights';
import MyTasks from './components/MyTasks/MyTasks';
import Settings from './components/Settings/Settings';
import TroubleShoot from './components/TroubleShoot/TroubleShoot';
import Admin from './components/Admin/Admin';

//

const useStyles = makeStyles((theme) => ({
  paper: {
    height: '100vh',
    width: '100%',
    padding: 3,
    overflow: 'scroll',
  },
}));

const App = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Router>
            <Hidden smDown>
              <Grid item xs={3} md={3}>
                <Paper className={classes.paper}>
                  {/* Navigation Side Bar Here */}
                  <NavigationSideBar />
                </Paper>
              </Grid>
            </Hidden>
            <Grid item xs={12} md={9}>
              <Paper className={classes.paper}>
                {/* Main Body of App here */}
                <Redirect exact from="/" to="/reports" />

                <Route exact path="/reports" component={ReportsPage} />
                <Route exact path="/insights" component={Insights} />
                <Route exact path="/mytasks" component={MyTasks} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/settings" component={Settings} />
                <Route exact path="/troubleshoot" component={TroubleShoot} />
                <Route exact path="/admin" component={Admin} />
              </Paper>
            </Grid>
          </Router>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default App;
