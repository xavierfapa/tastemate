import './UniqueRecipie.css'; 
import goBackIcon from '../../assets/back-white4.png';
// import goBackIcon from '../../assets/back-page-white.svg';
import deleteRecipie from '../../assets/delete-white3.png';
import editRecipie from '../../assets/edit-white2.png';

import { Recipie } from '../../Interfaces';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUniqueRecipie } from '../../services/apiRecipies';
import { deleteRecipieDB } from '../../services/apiRecipies';
import { useNavigate } from 'react-router-dom';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function UniqueRecipie() {
  const { recipieId } = useParams();

  const [recipieData, setRecipieData] =  useState<Recipie | null>(null);
  const [isDeleteSecureVisible, setIsDeleteSecureVisible] = useState(false);

  const handleDeleteAlert = () => {
    console.log('clicked');
    setIsDeleteSecureVisible(!isDeleteSecureVisible);
  };

  const navigate = useNavigate();

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
    navigate('/user-recipies');
  }

  const handleDelete = (recipieId: any) => {
    deleteRecipieDB(recipieId);
    setIsDeleteSecureVisible(false);
    navigate('/user-recipies');
  }

  const sliderSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    dots: true,
  };
  
  return (
    <div className='UniqueRecipie'>
      <div className="unique-recipie-header">
        <div>
          <img onClick={goBack} src={goBackIcon} className='goBack-Recipies' />
        </div>
        <div className='trash-edit'>
          <img src={editRecipie} alt="" />
          <div className="trash-container">
            {/* <img onClick={() => handleDelete(recipieId)} src={deleteRecipie} alt="" /> */}
            <img onClick={handleDeleteAlert} src={deleteRecipie} alt="" />
            {isDeleteSecureVisible && <div className="delete-secure" onClick={() => handleDelete(recipieId)} >Are you sure?</div>}
            {/* <div className="delete-secure">Are you sure?</div> */}
          </div>
        </div>
      </div>
      {recipieData && (
        <div className='recipie-data'>
           <div className="recipie-images">
              <Slider {...sliderSettings} className="something">
                {recipieData.images
                  .filter(image => image.length > 0)
                  .map((image, index) => (
                    <div key={index}>
                      <img src={image} alt="" />
                    </div>
                  ))}
              </Slider>
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