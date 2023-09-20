import './RecipieForm.css';
import '../Register-Login/Register-Login.css';
import { Recipie } from '../../Interfaces';
import { useForm } from 'react-hook-form';
import { postRecipie } from '../../services/apiRecipies';
import { useAuth } from '../../context/AuthContext';

function RecipieForm() {
  const { register, handleSubmit } = useForm<Recipie>();
  const { user } = useAuth(); 

  const submitForm = handleSubmit(async (recipie: Recipie) => {
    recipie.userId = user.id;
    console.log(recipie)
    await postRecipie(recipie);
  });

  return (
    <div className="register-page-container">
      <div className="register-page">
        <form onSubmit={submitForm}>
          <input type="text" {...register("title", { required: true })} placeholder='Title' />
          <input type="text" {...register("description", { required: true })} placeholder='Description' />
          <input type="text" {...register("ingridients", { required: true })} placeholder='Ingridients' />
          <button type="submit" >Upload recipie</button>
        </form>
      </div>
    </div>
  )
}

export default RecipieForm

