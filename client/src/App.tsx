import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { createStyles, makeStyles, Theme, Container, Grid } from '@material-ui/core';

import GlobalStyle from './Global.styles';
import Header from './components/Header/Header';
import { routes } from './constants/routes/routes';
import Landing from './pages/Landing/Landing';

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
    <>
      <GlobalStyle />
      <Container className={classes.container} maxWidth={false}>
        <Grid>
          <Header />
          <Switch>
            <Route path={routes.LANDING} component={() => <Landing />} />
            {/* <Route path={`${routes.TEAM_PAGE}/:id`} children={(props) => <Team {...props} />} /> */}
          </Switch>
        </Grid>
      </Container>
    </>


  );
};

export default App;
