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
    navigate('/recipies');
  });

  return (
    <div className="login-page-container" >
      <div className="login-page">
        <form onSubmit={onSubmit}>
          <input type="email" {...register("email", { required: true })} placeholder='Email' />
          <input type="password" {...register("password", { required: true })} placeholder='Password' />
          <button type="submit" >Login</button>
        </form>
          <p className='swap-to'>Don't have an account? <Link to="/register" className='swap-to-link'>Register</Link></p>
      </div>
    </div>
  )
}

export default LoginPage