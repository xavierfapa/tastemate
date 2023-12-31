import './Register-Login.css';
import { useEffect } from 'react';
import { User, AuthContextType } from '../../Interfaces';
import { useAuth } from '../../context/AuthContext';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';

function RegisterPage() {
  const { register, handleSubmit } = useForm<User>();
  const { signup, isAuthenticated } = useAuth() as AuthContextType;
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate('/initial');
  }, [isAuthenticated]);

  const submitForm = handleSubmit(async (user: User) => {
    await signup(user);
  });

  return (
    <div className="register-page-container">
      <div className="register-page">
        <form onSubmit={submitForm} className='register-form'>
          <input className='register-input' type="text" {...register("username", { required: true })} placeholder='Username' />
          <input className='register-input' type="email" {...register("email", { required: true })} placeholder='Email' />
          <input className='register-input' type="password" {...register("password", { required: true })} placeholder='Password' />
          <button className='register-button' type="submit" >Sign up</button>
        </form>
        <p className='swap-to'>Already have an account? <Link to="/login" className='swap-to-link'>Log in</Link></p>
      </div>
    </div>
  )
}

export default RegisterPage

