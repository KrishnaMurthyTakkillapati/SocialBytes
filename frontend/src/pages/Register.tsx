import React, { useReducer, useEffect, SyntheticEvent, useContext, useState } from 'react';
import { createStyles, makeStyles, } from '@mui/styles';
import { useHistory } from "react-router-dom";

import { Theme } from '@mui/system';
import { Alert ,Snackbar} from '@mui/material';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import axios from "axios";
import { AppContext } from '../contexts';

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

//state type

type State = {
  username: string
  password: string
  isButtonDisabled: boolean
  helperText: string
  isError: boolean
  firstName: string
  lastName: string
};

const initialState: State = {
  username: '',
  password: '',
  isButtonDisabled: true,
  helperText: '',
  isError: false,
  firstName: '',
  lastName: ''
};

type Action = { type: 'setUsername', payload: string }
  | { type: 'setPassword', payload: string }
  | { type: 'setIsButtonDisabled', payload: boolean }
  | { type: 'loginSuccess', payload: string }
  | { type: 'loginFailed', payload: string }
  | { type: 'setIsError', payload: boolean }
  | { type: 'setFirstName', payload: string }
  | { type: 'setLastName', payload: string };

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
    case 'setFirstName':
      return {
        ...state,
        firstName: action.payload
      };
    case 'setLastName':
      return {
        ...state,
        lastName: action.payload
      };
  }
}

const Register = () => {
  const classes = useStyles();
  const context = useContext(AppContext);

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.username.trim() && state.password.trim()) {
      dispatch({
        type: 'setIsButtonDisabled',
        payload: false
      });
    } else {
      dispatch({
        type: 'setIsButtonDisabled',
        payload: true
      });
    }
  }, [state.username, state.password]);
  const [error,setError]=useState("");
  const [open, setOpen] = useState(false);
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const history = useHistory();
  const handleRegister = async (event: SyntheticEvent) => {
    event.preventDefault()
console.log(JSON.stringify({ 'FirstName': state.firstName, 'LastName': state.lastName, 'Email': state.username, 'Password': state.password }))
    axios.post(`http://localhost:9010/api/register`,
    JSON.stringify({ 'FirstName': state.firstName, 'LastName': state.lastName, 'Email': state.username, 'Password': state.password }),{withCredentials:true})
    .then(response => {
      if (response.status != 200) {
        // const error = (data && data.message) || response.statusText;
        return Promise.reject(response.statusText);
      }
      axios.post(`http://localhost:9010/api/login`, JSON.stringify({ 'FirstName': state.firstName, 'LastName': state.lastName, 'Email': state.username, 'Password': state.password }),{withCredentials:true}).then(res=>{
        if (res.status != 200) {
          return Promise.reject(res.statusText);
        }
        context.user.isActive=true
        context.user.name= state.firstName + " " + state.lastName;
        history.push("/")
      })
      return (response.status);
    }).catch(err=>{
      setOpen(true);
      setError(err.response['data'].message)
    });


  }



  // if (state.username === 'abc@email.com' && state.password === 'password') {
  //   dispatch({
  //     type: 'loginSuccess',
  //     payload: 'Login Successfully'
  //   });
  // } else {
  //   dispatch({
  //     type: 'loginFailed',
  //     payload: 'Incorrect username or password'
  //   });
  // }


  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13 || event.which === 13) {
      state.isButtonDisabled || handleRegister(event);
    }
  };

  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setUsername',
        payload: event.target.value
      });
    };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setPassword',
        payload: event.target.value
      });
    }

  const handleFirstNameChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setFirstName',
        payload: event.target.value
      });
    }

  const handleLastNameChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setLastName',
        payload: event.target.value
      });
    }
  return (<>
    <form className={classes.container} noValidate autoComplete="off">
      <Card className={classes.card}>
        <CardHeader className={classes.header} title="Register" />
        <CardContent>
          <div>
            <TextField
              error={state.isError}
              fullWidth
              id="firstName"
              type="firstName"
              label="First Name"
              placeholder="Type your FirstName"
              margin="normal"
              onChange={handleFirstNameChange}
              onKeyPress={handleKeyPress}
            /><TextField
              error={state.isError}
              fullWidth
              id="lastName"
              type="lastName"
              label="Last Name"
              placeholder="Type your Last Name"
              margin="normal"
              onChange={handleLastNameChange}
              onKeyPress={handleKeyPress}
            />
            <TextField
              error={state.isError}
              fullWidth
              id="username"
              type="email"
              label="Create Username"
              placeholder="Username"
              margin="normal"
              onChange={handleUsernameChange}
              onKeyPress={handleKeyPress}
            />
            <TextField
              error={state.isError}
              fullWidth
              id="password"
              type="password"
              label="Create Password"
              placeholder="Password"
              margin="normal"
              helperText={state.helperText}
              onChange={handlePasswordChange}
              onKeyPress={handleKeyPress}
            />
            <TextField
              error={state.isError}
              fullWidth
              id="passwordRetype"
              type="password"
              label="Retype Password"
              placeholder="Retype Password"
              margin="normal"
              helperText={state.helperText}
              onChange={handlePasswordChange}
              onKeyPress={handleKeyPress}
            />
          </div>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            className={classes.loginBtn}
            onClick={handleRegister}
            disabled={state.isButtonDisabled}>
            Register
          </Button>
        </CardActions>
      </Card>
    </form>
    <div style={{position:'relative',top:'3%',display: 'flex',textAlign: 'center',justifyContent: 'center' }}>
      <span>Already a member? &nbsp; </span>
      <a href="/Login"  style={{ color: '#00FFFF' }}> Login</a>
    </div>
  {error!=="" && <div>
  <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
    <Alert variant="filled" onClose={handleClose} severity="error" sx={{ width: '100%' }}>
      Login information provided is wrong. {error}
    </Alert>
  </Snackbar>
</div>
}
</>
  );
}

export default Register;