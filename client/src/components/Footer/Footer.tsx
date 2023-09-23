import './Footer.css';
import profile from '../../assets/profile2.png'
import profileOrange from '../../assets/profile-orange.png'
import home from '../../assets/logo-grey.png';
import homeOrange from '../../assets/logo-orange.png';
import messages from '../../assets/envelope2.png';
import messagesOrange from '../../assets/envelope-orange.png';
import subelo from '../../assets/add-recipie2.png';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';


function Footer() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname);

  useEffect(() => {
    if (location.pathname !== currentPage) {
      setCurrentPage(location.pathname);
    }
  }, [location, currentPage]);


  const links = [
    {
      to: '/initial',
      imgSrc: location.pathname === '/initial' ? homeOrange : home,
      text: 'Home',
    },
    {
      to: '/recipies-form',
      imgSrc: subelo,
      text: 'Upload',
    },
    {
      to: '/messages',
      imgSrc: location.pathname === '/messages' ? messagesOrange : messages,
      text: 'Mailbox',
    },
    {
      to: '/profile',
      imgSrc: location.pathname === '/profile' ? profileOrange : profile,
      text: 'You',
    },
  ];

  return (
    <div className="Footer">
      {links.map((link, index) => (
        <Link to={link.to} key={index} className="footer-container">
          <img
            className={`footer-img ${link.to === currentPage ? 'active' : ''}`}
            src={link.imgSrc}
            alt={link.text}
          />
          <p className={link.to === location.pathname ? 'active-link' : ''}>{link.text}</p>
        </Link>
      ))}
    </div>
  )
}
export default Footer

    // const homeSrc = location.pathname === '/initial' ? homeOrange : home;
    // const profileSrc = location.pathname === '/profile' ? profileOrange : profile;
    // const messagesSrc = location.pathname === '/messages' ? messagesOrange : messages;


    // <div className="Footer">
    //   <Link to="/initial" className='footer-container'>
    //     <img className="footer-img" src={homeSrc} alt="Inicio" />
    //     <p>Home</p>
    //   </Link>
    //   <Link to="/recipies-form" className='footer-container'>
    //     <img className="footer-img" src={subelo} alt="Subir" />
    //     <p>Upload</p>
    //   </Link>
    //   <Link to="/messages" className='footer-container'>
    //     <img className="footer-img" src={messagesSrc} alt="Mensajes" />
    //     <p>Mailbox</p>
    //   </Link>
    //   <Link to="/profile" className='footer-container'>
    //     <img className="footer-img" src={profileSrc} alt="profile" />
    //     <p>You</p>
    //   </Link>
    // </div>