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
    if (isAuthenticated) navigate('/recipies');
  }, [isAuthenticated]);

  const submitForm = handleSubmit(async (user: User) => {
    await signup(user);
  });

  return (
    <div className="register-page-container">
      <div className="register-page">
        <form onSubmit={submitForm}>
          <input type="text" {...register("username", { required: true })} placeholder='Username' />
          <input type="email" {...register("email", { required: true })} placeholder='Email' />
          <input type="password" {...register("password", { required: true })} placeholder='Password' />
          <button type="submit" >Register</button>
        </form>
        <p className='swap-to'>Already have an account? <Link to="/login" className='swap-to-link'>Login</Link></p>
      </div>
    </div>
  )
}

export default RegisterPage

