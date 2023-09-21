import './Profile.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function Profile() {
  const { user } = useAuth();

  // const handleClick = () => {
  //   console.log(user);
  // }

  return (
    <div className='Profile'>
      <div className="profile-header">
        <div className="user-img"></div>
        <p>{user.username || 'username'}</p>
      </div>
      <h3><Link to="/user-recipies">Recipies</Link></h3>
      {/* <button onClick={handleClick}>Caca</button> */}
    </div>
  )
}

export default Profile