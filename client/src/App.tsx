import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { createStyles, makeStyles, Theme, Container, Grid } from '@material-ui/core';
import { Header } from './components/Header/Header';
import Home from './pages/Home/Home';
import { TeamsTable } from './pages/TeamsTable/TeamsTable';
import './App.css';
import { routes } from './constants/routes';
import { Team } from './pages/Team/Team';
import { Auth } from './pages/Auth/Auth';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing(0),
    },
    header: {
      padding: theme.spacing(0),
    },
  }),
);

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth={false}>
      <Grid className={classes.header}>
        <Header />
      </Grid>
      <Grid>
        <Switch>
          <Route exact path={routes.AUTH} component={() => <Auth />} />
          <Route exact path={routes.HOME} component={() => <Home />} />
          <Route path={routes.TEAMS} component={() => <TeamsTable />} />
          <Route path={`${routes.TEAM_PAGE}/:id`} children={(props) => <Team {...props} />} />
        </Switch>
      </Grid>
    </Container>
  );
};

export default App;
