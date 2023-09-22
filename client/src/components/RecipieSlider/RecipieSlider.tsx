import './RecipieSlider.css';
import { Recipie } from '../../Interfaces';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function RecipieSlider({ recipie }) {

  const initialSliderSettings = {
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    dots: true,
  };

  return (
    <div className='RecipieSlider'>
      <Slider {...initialSliderSettings}>
        {recipie.images
        .filter(image => image.length > 0)
        .map((image, index) => (
          <div key={index}>
            <img src={image} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default RecipieSlider