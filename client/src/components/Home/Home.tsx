import './Home.css'
import logo from '../../assets/my-logo2.png'
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

function Home() {
  return (
    <div className='Home'>
      <div className="header">
        <h2>Tastemate</h2>
        <img src={logo}/>
      </div>
      <div className="session">
        <h3>Register or login</h3>
        <button><Link to="/register">Register</Link></button>
        <p>Already have an account? <Link to="/login" className='link'>Login</Link></p>
      </div>
      <Footer />
    </div>
  )
}

export default Home