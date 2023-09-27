import './Profile.css';
import configuration from '../../assets/configuration.png';
import recipies from '../../assets/tupperware.png';
import rightArrow from '../../assets/right-arrow1.png';
import logout from '../../assets/log-out.png'
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function Profile() {
  const { user } = useAuth();

  return (
    <div className='Profile'>
      <div className="profile-header">
        <div className="user-img"></div>
          <p>{user.username || 'username'}</p>
      </div>
      <div className="profile-content-wrapper">
        <Link to="/user-recipies" className="profile-content-container">
          <div className="profile-content">
            <img src={recipies} alt="" />
            <h3>Recipies</h3>
          </div>
          <img className="right-arrow" src={rightArrow} alt="" />
        </Link>
        <div className='profile-content-container'>
          <div className="profile-content">
            <img src={configuration} alt="" />
            <h3>Settings</h3>
          </div>
          <img className="right-arrow" src={rightArrow} alt="" />
        </div>
        <Link to="/" className="profile-content-container">
          <div className="profile-content">
            <img className="logout" src={logout} alt="" />
            <h3>Logout</h3>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Profile