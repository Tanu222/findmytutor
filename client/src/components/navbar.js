import { Link } from 'react-router-dom';
import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useAppContext } from '../context/appContext';
import { useState } from 'react';
import '../assets/styles/navbar.css';

const Navbar = () => {
  const { user, logoutUser } = useAppContext();
  const [showLogout, setShowLogout] = useState(false);
  const toggleShowLogout = () => {
    setShowLogout(!showLogout);
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to='/'>Skill Up</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
                  <button type="button" className='user-icon btn' onClick={() => { toggleShowLogout() }}>
                    <FaUserCircle className='user-img'/>
                    {user && user.username}
                    <FaCaretDown />
                  </button>
                  <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
                    <button type="button" className="dropdown-btn" onClick={() => { logoutUser(); toggleShowLogout(); }}>
                      logout
                    </button>
                  </div>
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