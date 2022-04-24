import { Link, useNavigate } from 'react-router-dom';
import { FaCaretDown } from "react-icons/fa";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { useAppContext } from '../context/appContext';
import { useState } from 'react';
import '../assets/styles/navbar.css';
import Logo from './logo';
import ProfileImage from './profileImage';

const Navbar = () => {
  const { user, logoutUser } = useAppContext();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const navigate = useNavigate();

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const gotoProfile = () => {
    navigate('/user-profile')
  }
  return (

    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid">
          <Link className="navbar-brand" to='/'><Logo /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-3">
              {
                user &&
                <li className="nav-item">
                  <Link className="nav-link" to="/tutor-list">Find Your Tutor</Link>
                </li>
              }
              {
                user &&
                <li className="nav-item">
                  <Link className="nav-link" to="/add-tutor">Become A Tutor</Link>
                </li>
              }
              {
                !user &&
                <li className="nav-item">
                  <Link className="nav-link" to="/register">Login</Link>
                </li>
              }
              {
                user &&
                <div>
                  <button type="button" className='user-icon btn1' onClick={handleClick}>
                    {/* <FaUserCircle className='user-img' /> */}
                    <ProfileImage user={user} size='32px' />
                    {user && user.username}
                    <FaCaretDown />
                  </button>
                  <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                  >
                    <Typography sx={{ p: 2 }} className='dropdown' onClick={() => { gotoProfile(); }}>Profile</Typography>
                    <Typography sx={{ p: 2 }} className='dropdown' onClick={() => { logoutUser();}}>Logout</Typography>
                  </Popover>
                </div>
              }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;