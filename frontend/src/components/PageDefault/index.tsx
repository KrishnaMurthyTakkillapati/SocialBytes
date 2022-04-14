import React, { useReducer, useEffect, SyntheticEvent, useContext } from 'react';
import { Typography, Box } from '@mui/material';
import { useLocation } from 'react-router';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import { createStyles, makeStyles, } from '@mui/styles';

import {Theme } from '@mui/system';



import { PageTitle } from '../PageTitle';



type State = {
  username: string
  password:  string
  isButtonDisabled: boolean
  helperText: string
  isError: boolean
};

const initialState:State = {
  username: '',
  password: '',
  isButtonDisabled: true,
  helperText: '',
  isError: false
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      width: 400,
      margin: `${theme.spacing(0)} auto`
    },
    loginBtn: {
      marginTop: theme.spacing(2),
      flexGrow: 1
    },
    header: {
      textAlign: 'center',
      background: '#212121',
      color: '#fff'
    },
    card: {
      marginTop: theme.spacing(10)
    }
  })
);
type Action = { type: 'setUsername', payload: string }
  | { type: 'setPassword', payload: string }
  | { type: 'setIsButtonDisabled', payload: boolean }
  | { type: 'loginSuccess', payload: string }
  | { type: 'loginFailed', payload: string }
  | { type: 'setIsError', payload: boolean };
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'setUsername': 
      return {
        ...state,
        username: action.payload
      };
    case 'setPassword': 
      return {
        ...state,
        password: action.payload
      };
    case 'setIsButtonDisabled': 
      return {
        ...state,
        isButtonDisabled: action.payload
      };
    case 'loginSuccess': 
      return {
        ...state,
        helperText: action.payload,
        isError: false
      };
    case 'loginFailed': 
      return {
        ...state,
        helperText: action.payload,
        isError: true
      };
    case 'setIsError': 
      return {
        ...state,
        isError: action.payload
      };
  }
}

export const PageDefault = () => {
  const location = useLocation();
  
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    

    <form className={classes.container} noValidate autoComplete="off">
      <Card className={classes.card}>
        <CardHeader className={classes.header} title="EDIT PROFILE" />
        <CardContent>
          <div>
            <TextField
              error={state.isError}
              fullWidth
              id="username"
              type="email"
              label="Username"
              placeholder="Username"
              margin="normal"
              
              
            />
            <TextField
              error={state.isError}
              fullWidth
              id="password"
              type="password"
              label="FullName"
              placeholder="FullName"
              margin="normal"
              helperText={state.helperText}
              
            />
            <TextField
              error={state.isError}
              fullWidth
              id="password"
              type="password"
              label="Password"
              placeholder="Password"
              margin="normal"
              helperText={state.helperText}
              />
            <TextField
              error={state.isError}
              fullWidth
              id="password"
              type="password"
              label="Confirm Password"
              placeholder="Confirm Password"
              margin="normal"
              helperText={state.helperText}
              
            />
            <TextField
              error={state.isError}
              fullWidth
              id="password"
              type="password"
              label="Change profile picture"
              placeholder="Upload profile picture"
              margin="normal"
              helperText={state.helperText}
             /> 
          </div>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            className={classes.loginBtn}
            
            disabled={state.isButtonDisabled}>
            Save Changes
          </Button>
        </CardActions>
      </Card>
    </form>
    
    
  );
};
