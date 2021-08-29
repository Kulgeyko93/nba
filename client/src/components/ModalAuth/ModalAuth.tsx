import React from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import styles from './modalAuth.module.scss'

export const AuthForm = () => {

  return (
    <div className={styles.authContainer}>
      <div className={styles.authHeader}>
        <div className={`${styles.headerText} ${styles.headerText_active}`}>
          <Typography variant="h5" gutterBottom>
            Sing in
          </Typography>
        </div>
        <div className={styles.headerText}>
          <Typography variant="h5" gutterBottom>
            Sing up
          </Typography>
        </div>
      </div>
      <div className={styles.authContent}>
        <AccountCircleIcon className={styles.contentIcon} />
        <TextField
          label='Login'
          variant={undefined}
        />
      </div>
      
      <Button variant="contained" color="primary">
        Sing In
      </Button>
    </div>
  )
}
