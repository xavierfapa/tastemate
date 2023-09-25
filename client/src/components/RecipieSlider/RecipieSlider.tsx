import './RecipieSlider.css';
import { Recipie } from '../../Interfaces';
// import styles from './RecipieSlider.module.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function RecipieSlider({ recipie }) {
  
  const customPaging = (i: number) => {
    return <div className="custom-dot" key={i}></div>;
  };

  const initialSliderSettings = {
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    // arrows: true,
    dots: true,
    customPaging: customPaging,
  };

  return (
    <div className='RecipieSlider'>
      <div className="Recipie-image-container">
        {recipie && recipie.images && recipie.images.length > 0 ? (
          <Slider {...initialSliderSettings} className='homeSlider' id="hey">
            {recipie.images
              .filter(image => image.length > 0)
              .map((image, index) => (
                <div className="image-container" key={index}>
                  <img className='slider-image' src={image} alt="" />
                </div>
              ))}
          </Slider>
        ) : (
          <div className="no-recipies">
            <p>No more recipes available</p>
          </div>
        )}
        {recipie && (
        <div className="slider-recipie-content">
          <h2>{recipie.title}</h2>
          <h3>{recipie.description}</h3>
          <h4>Ingredients</h4>
          <p>{recipie.ingredients}</p>
        </div>
      )}
      </div>
    </div>
  )
}

export default RecipieSlider