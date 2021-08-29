import React from 'react';
import { NavLink } from 'react-router-dom';

import { createStyles, makeStyles, Theme, AppBar, IconButton, Toolbar, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
// import TabLink from '../TabLink/TabLink';
import { routes } from '../../constants/routes';
import { SubHeader } from './SubHeader/SubHeader';

export const Header = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.headerContent} position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>

        <Typography variant="h5" className={classes.routeLink}>
          <NavLink to={routes.HOME}>Home</NavLink>
        </Typography>

        <Typography variant="h5" className={classes.routeLink}>
          <NavLink to={routes.TEAMS}>Teams</NavLink>
        </Typography>

        <Button color="inherit">Login</Button>
      </Toolbar>
      <SubHeader />
    </AppBar>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headerContent: {
      color: '#fff',
    },
    space: {
      padding: theme.spacing(2),
    },
    routeLink: {
      textDecoration: 'none',
      color: 'secondary',
      margin: theme.spacing(3),
    },
  }),
);
