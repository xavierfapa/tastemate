import './Footer.css';
import profile from '../../assets/profile.png'
import home from '../../assets/logo-orange.png';
// import messages from '../../assets/chat3.png';
import messages from '../../assets/chat4.png';
// import subelo from '../../assets/add-recipie.svg';
import subelo from '../../assets/add-recipie.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='Footer'>
      <Link to="/initial"><img className="footer-img" src={home} alt="Inicio" /></Link>
      <Link to="/recipies-form"><img className="footer-img" src={subelo} alt="Subir" /></Link>
      {/* <Link to="/ruta-de-mensajes"><img className="footer-img" src={messages} alt="Mensajes" /></Link> */}
      <img className="footer-img" src={messages} alt="" />
      <Link to="/profile"><img className="footer-img" src={profile} alt="profile" /></Link>
    </div>
  )
}

export default Footer