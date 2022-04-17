import { useState, useEffect } from 'react';
import '../assets/styles/register.css';
import { useAppContext } from '../context/appContext';
import { ShowAlert } from '../components';
import { useNavigate } from 'react-router-dom';
import {Logo} from '../components';
import { InputAdornment, FormControl, IconButton, InputLabel, OutlinedInput, TextField,Button } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

let initialState = {
  username: '',
  email: '',
  password: '',
  isMember: true,
  password: '',
  showPassword: false
}

const Register = () => {
  const { registerUser, displayAlert, showAlert, isLoading, user, loginUser } = useAppContext();
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };



  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const navigate = useNavigate();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }
  const onSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = values;
    if (!email || (!username && !values.isMember) || !password) {
      //console.log("incomplete credentials");
      displayAlert('please provide all values', 'error');
      return;
    }
    const currentUser = { username, email, password };
    if (values.isMember) {
      loginUser(currentUser);
    } else {
      registerUser(currentUser);
    }
  }

  useEffect(() => {
    //console.log(user);
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 3000)

    }
  }, [user, navigate])

  return (
    <div className="register text-center">
      <div className='form'>
      <Logo className='logo'/>
      <h3>{values.isMember ? "Login" : "Register"}</h3>
      {
        showAlert && <ShowAlert />
      }
      {!values.isMember && <TextField id="outlined-required"
          label="Name"
          type="text"
          sx={{ m: 2, width: '40ch', display: 'flex', flexWrap: 'wrap' }}
          variant="outlined"
          value={values.username}
          name='username'
          onChange={handleChange}
         />}
      <div>
        <TextField id="outlined-required"
          label="Email"
          type="email"
          sx={{ m: 2, width: '40ch', display: 'flex', flexWrap: 'wrap' }}
          variant="outlined"
          value={values.email}
          name='email'
          onChange={handleChange}
         />
      </div>
      <FormControl sx={{ m: 2, width: '40ch', display: 'flex', flexWrap: 'wrap' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handlePasswordChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <Button variant="contained" onClick={onSubmit} disabled={isLoading} className='btn btn-block'>Submit</Button>
      <p>
        {values.isMember ? 'Not a member yet?' : 'Already a member?'}
        <button type="button" onClick={toggleMember} className="member-btn" disabled={isLoading}>
          <span> {values.isMember ? 'Register' : 'Login'}</span>
        </button>
      </p>
      </div>
    </div>
  )
}

export default Register;