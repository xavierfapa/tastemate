import './RecipieForm.css';
import goBackIcon from '../../assets/next.svg'
import { Recipie } from '../../Interfaces';
import { useForm } from 'react-hook-form';
import { postRecipie, postImage } from '../../services/apiRecipies';
import { useAuth } from '../../context/AuthContext';
import photo from '../../assets/camera.svg';
import { useState } from 'react';

function RecipieForm() {
  const { register, handleSubmit } = useForm<Recipie>();
  const { user } = useAuth();

  const [imageUrls, setImageUrls] = useState<string[]>(Array(10).fill(''));

  const [titleInputValue, setTitleInputValue] = useState('');
  const [descriptionInputValue, setDescriptionInputValue] = useState('');
  const [ingredientsInputValue, setIngredientsInputValue] = useState('');
  
  const goBack = () => {
    window.history.back();
  }

  const submitForm = handleSubmit(async (recipie: Recipie) => {
    recipie.userId = user.id;
  
    const uploadedImageUrls = await Promise.all(
      imageUrls.map(async (base64, index) => {
        if (base64) {
          try {
            const url = await postImage({ image: base64 });
            return url || '';
          } catch (error) {
            console.error(error);
            return '';
          }
        }
        return '';
      })
    );
    recipie.images = uploadedImageUrls;
    await postRecipie(recipie);
  });

  const convertBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  
  const handleImageChange = (index: number) => async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];
    if (file) {
      const base64 = await convertBase64(file);
      const updatedUrls = [...imageUrls];
      updatedUrls[index] = base64;
      setImageUrls(updatedUrls);
    }
  };

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
          {imageUrls.map((imageUrl, index) => (
            <div className="input-label" key={index}>
              <label className="photo-label" htmlFor={`imageInput${index}`}>
                <img className="upload-photo" src={imageUrl || photo} alt={`Image ${index + 1}`} />
              </label>
              <input id={`imageInput${index}`} className='image-form-input' type="file" accept="image/*" onChange={handleImageChange(index)} />
            </div>
          ))}
          </div>
          {titleInputValue && <p className='input-placeholder'>Title</p>}
          <input className="recipie-input" type="text" {...register("title", { required: true })} placeholder='Title*' value={titleInputValue} onChange={(e) => setTitleInputValue(e.target.value)} />
          {descriptionInputValue && <p className='input-placeholder'>Description</p>}
          <input className="recipie-input" type="text" {...register("description", { required: true })} placeholder='Description*' value={descriptionInputValue} onChange={(e) => setDescriptionInputValue(e.target.value)} />
          {ingredientsInputValue && <p className='input-placeholder'>Ingredients</p>}
          <input className="recipie-input" type="text" {...register("ingredients", { required: true })} placeholder='Ingredients*' value={ingredientsInputValue} onChange={(e) => setIngredientsInputValue(e.target.value)} />
          <div className="button-container">
            <button className='recipie-button' type="submit" >Upload recipie</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RecipieForm

  
  // const submitForm = handleSubmit(async (recipie: Recipie) => {
  //   recipie.userId = user.id;
  //   console.log(recipie)

  //   //  add image urls to recipie
  //   // if (imageUrls) {
  //   //   recipie.images = imageUrls;
  //   // }
  //   // if (image1) {
  //     // upload to cloudinary 
  //     // push url
  //     // recipie.image.push(url)
  //   // }
  //   await postRecipie(recipie);
  // });


  
  // const handleImageChange = (setImage: React.Dispatch<string>) => async (event: any) => {
  //   const file = event.target.files[0];
  //   const base64 = await convertBase64(file);
  //   setImage(base64 as string || '');
  // };

    // if (file) {
    //   // setLoading(true);
    //   const reader = new FileReader();
    //   reader.onload = async () => {
    //     try {
    //       const url = await postImage({ image: base64 }); 
    //       setImage(url || '');
    //     } catch (error) {
    //       console.error(error);
    //     } finally {
    //       setLoading(false);
    //     }
    //   };
    //   reader.readAsDataURL(file);
    // }

          {/* <div className="images-form">
            <label className="photo-label" htmlFor="imageInput1"><img className="upload-photo" src={imageUrls[0] || photo} /></label>
            <input id="imageInput1" className='image-form-input' type="file" accept="image/*" {...register("images")} onChange={handleImageChange(setImage1)} />
            <label className="photo-label" htmlFor="imageInput2"><img className="upload-photo" src={imageUrls[1] || photo} /></label>
            <input id="imageInput2" className='image-form-input' type="file" accept="image/*" {...register("images")} />
            <label className="photo-label" htmlFor="imageInput3"><img className="upload-photo" src={imageUrls[2] || photo} /></label>
            <input id="imageInput3" className='image-form-input' type="file" accept="image/*" {...register("images")} />
            <label className="photo-label" htmlFor="imageInput4"><img className="upload-photo" src={imageUrls[3] || photo} /></label>
            <input id="imageInput4" className='image-form-input' type="file" accept="image/*" {...register("images")} />
            <label className="photo-label" htmlFor="imageInput5"><img className="upload-photo" src={imageUrls[4] || photo} /></label>
            <input id="imageInput5" className='image-form-input' type="file" accept="image/*" {...register("images")} />
          </div> */}