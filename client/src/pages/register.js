import { useState,useEffect } from 'react';
import '../assets/styles/register.css';
import { useAppContext } from '../context/appContext';
import { Alert } from '../components';
import { useNavigate } from 'react-router-dom';

let initialState = {
  username: '',
  email: '',
  password: '',
  isMember: true,
}

const Register = () => {
  const { registerUser, displayAlert, showAlert, isLoading, user,loginUser } = useAppContext();
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }
  const onSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = values;
    if (!email || (!username && !values.isMember) || !password) {
      console.log("incomplete credentials");
      displayAlert();
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
    <div className="main-div">
      <h3>{values.isMember ? "Login" : "Register"}</h3>
      {
        showAlert && <Alert />
      }
      {!values.isMember && <input type='text' placeholder='Name...' value={values.username} name="username" onChange={handleChange} />}
      <input type="email" placeholder="Email..." value={values.email} name="email" onChange={handleChange} />
      <input type="password" placeholder="Password..." value={values.password} name="password" onChange={handleChange} />
      <button className="btn btn-primary" onClick={onSubmit} disabled={isLoading}>Submit</button>
      <div>
        {values.isMember ? 'Not a member yet?' : 'Already a member?'}
        <div type="button" onClick={toggleMember} className="member-btn" disabled={isLoading}>
          {values.isMember ? 'Register' : 'Login'}
        </div>
      </div>
    </div>
  )
}

export default Register;