import './RecipieForm.css';
import goBackIcon from '../../assets/next.svg'
import { Recipie } from '../../Interfaces';
import { useForm } from 'react-hook-form';
import { postRecipie } from '../../services/apiRecipies';
import { useAuth } from '../../context/AuthContext';
import photo from '../../assets/camera.svg';
import { useState } from 'react';

function RecipieForm() {
  const { register, handleSubmit } = useForm<Recipie>();
  const { user } = useAuth();

  // const [imageUrl, setImageUrl] = useState('');

  const [titleInputValue, setTitleInputValue] = useState('');
  const [descriptionInputValue, setDescriptionInputValue] = useState('');
  const [ingredientsInputValue, setIngredientsInputValue] = useState('');

  const submitForm = handleSubmit(async (recipie: Recipie) => {
    recipie.userId = user.id;
    console.log(recipie)
    await postRecipie(recipie);
  });

  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipie-form-wrapper">
      <div className="recipie-form-header">
        <img onClick={goBack} src={goBackIcon} className='goBack' />
        <h3>Edit de product</h3>
      </div>
      <div className="recipie-form-container">
        <p className='recipie-product-info'>Product information</p>
        <form onSubmit={submitForm} className='recipie-form' >
          <div className="images-form">
            <label className="photo-label" htmlFor="imageInput1"><img className="upload-photo" src={photo} /></label>
            <input id="imageInput1" className='image-form-input' type="file" accept="image/*" {...register("image")} />
            {/* <input id="imageInput1" className='image-form-input' type="file" accept="image/*" {...register("image")} onChange={handleImageChange} /> */}
            <label className="photo-label" htmlFor="imageInput2"><img className="upload-photo" src={photo} /></label>
            <input id="imageInput2" className='image-form-input' type="file" accept="image/*" {...register("image")} />
            <label className="photo-label" htmlFor="imageInput3"><img className="upload-photo" src={photo} /></label>
            <input id="imageInput3" className='image-form-input' type="file" accept="image/*" {...register("image")} />
            <label className="photo-label" htmlFor="imageInput4"><img className="upload-photo" src={photo} /></label>
            <input id="imageInput4" className='image-form-input' type="file" accept="image/*" {...register("image")} />
            <label className="photo-label" htmlFor="imageInput5"><img className="upload-photo" src={photo} /></label>
            <input id="imageInput5" className='image-form-input' type="file" accept="image/*" {...register("image")} />
          </div>
          {titleInputValue && <p className='input-placeholder'>Title</p>}
          <input className="recipie-input" type="text" {...register("title", { required: true })} placeholder='Title*' value={titleInputValue} onChange={(e) => setTitleInputValue(e.target.value)} />
          {descriptionInputValue && <p className='input-placeholder'>Description</p>}
          <input className="recipie-input" type="text" {...register("description", { required: true })} placeholder='Description*' value={descriptionInputValue} onChange={(e) => setDescriptionInputValue(e.target.value)} />
          {ingredientsInputValue && <p className='input-placeholder'>Ingredients</p>}
          <input className="recipie-input" type="text" {...register("ingredients", { required: true })} placeholder='Ingredients*' value={ingredientsInputValue} onChange={(e) => setIngredientsInputValue(e.target.value)} />
          <button className='recipie-button' type="submit" >Upload recipie</button>
        </form>
      </div>
    </div>
  )
}

export default RecipieForm

