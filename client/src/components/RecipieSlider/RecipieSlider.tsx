import './RecipieSlider.css';
import { Recipie } from '../../Interfaces';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function RecipieSlider({ recipie }) {
  
  const customPaging = (i) => {
    return <div className="custom-dot" key={i}></div>;
  };

  const initialSliderSettings = {
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    dots: true,
    customPaging: customPaging,
  };

  return (
    <div className='RecipieSlider'>
      <div className="Recipie-image-container">
        <Slider {...initialSliderSettings}>
          {recipie.images
          .filter(image => image.length > 0)
          .map((image, index) => (
            <div className="image-container" key={index}>
              <img className='slider-image' src={image} alt="" />
            </div>
          ))}
        </Slider>
        <div className="slider-options">
      </div>
      </div>
    </div>
  )
}

export default RecipieSlider