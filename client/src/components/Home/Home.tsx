import './Home.css'
import logo from '../../assets/logo-orange.png'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='Home'>
      <div className="home-header">
        <h2 className='home-h2'>Tastemate</h2>
        <img src={logo}/>
      </div>
      <div className="session">
        <h3>Register or login</h3>
        <button><Link to="/register">Register</Link></button>
        <p>Already have an account? <Link to="/login" className='link'>Login</Link></p>
      </div>
    </div>
  )
}

export default Home