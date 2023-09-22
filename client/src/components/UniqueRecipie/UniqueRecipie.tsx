import './UniqueRecipie.css'; 
import goBackIcon from '../../assets/back-white4.png';
// import goBackIcon from '../../assets/back-page-white.svg';
import deleteRecipie from '../../assets/delete-white3.png';
import editRecipie from '../../assets/edit-white2.png';
import { useParams } from 'react-router-dom';
import { getUniqueRecipie } from '../../services/apiRecipies';
import { useEffect, useState } from 'react';
import { Recipie } from '../../Interfaces';

function UniqueRecipie() {
  const { recipieId } = useParams();

  const [recipieData, setRecipieData] =  useState<Recipie | null>(null);

  useEffect(() => {
    if (recipieId) {
      fetchRecipie(recipieId);
    }
  }, []);

  const fetchRecipie = (recipieId: string) => {
    getUniqueRecipie(recipieId)
      .then(recipie_data => {
        console.log(recipie_data);
        setRecipieData(recipie_data);
      })
      .catch(error => console.log(error));
  }

  const goBack = () => {
    window.history.back();
  }

  return (
    <div className='UniqueRecipie'>
      <div className="unique-recipie-header">
        <div>
          <img onClick={goBack} src={goBackIcon} className='goBack-Recipies' />
        </div>
        <div className='trash-edit'>
          <img src={deleteRecipie} alt="" />
          <img src={editRecipie} alt="" />
        </div>
      </div>
      {recipieData && (
        <div className='recipie-data'>
          {/* <div className="recipie-images">
            <img src={recipieData.images[1]} alt="" />
          </div> */}
          <div className="recipie-images">
            {recipieData.images.map((image, index) => (
              image.length > 0 ? <img key={index} src={image} alt="" /> : ''
            ))}
          </div>
          <div className="recipie-info">
            <h2>{recipieData.title}</h2>
            <p>{recipieData.description}</p>
            <p className='recipie-ingredients'>Ingredients</p>
            <p>{recipieData.ingredients}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default UniqueRecipie