import './Register-Login.css';
import { User, AuthContextType, userLoged } from '../../Interfaces';
import { useAuth } from '../../context/AuthContext';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';

function LoginPage() {
  const { register, handleSubmit } = useForm<User>();
  const { signin } = useAuth() as AuthContextType;
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (user: userLoged) => {
    await signin(user);
    navigate('/initial');
  });

  return (
    <div className="login-page-container" >
      <div className="login-page">
        <form onSubmit={onSubmit} className='register-form'>
          <input className='register-input' type="email" {...register("email", { required: true })} placeholder='Email' />
          <input className='register-input' type="password" {...register("password", { required: true })} placeholder='Password' />
          <button className='register-button' type="submit" >Log in</button>
        </form>
          <p className='swap-to'>Don't have an account? <Link to="/register" className='swap-to-link'>Sign up</Link></p>
      </div>
    </div>
  )
}

export default LoginPage