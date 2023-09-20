import './Footer.css';
import profile from '../../assets/profile.svg';
import home from '../../assets/my-logo2.png';
import messages from '../../assets/chat.svg';
import subelo from '../../assets/add-recipie.svg';

function Footer() {
  return (
    <div className='Footer'>
      <img src={home} alt="" />
      <img src={subelo} alt="" />
      <img src={messages} alt="" />
      <img src={profile} alt="" />
    </div>
  )
}

export default Footer