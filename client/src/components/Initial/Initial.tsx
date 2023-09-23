import './Initial.css';
import cross from '../../assets/cross.png';
import before from '../../assets/before.png';
import heart from '../../assets/heart.png';

import { useState, useEffect } from 'react';
import { getOtherRecipies } from '../../services/apiRecipies';
import { useAuth } from '../../context/AuthContext';
import { useRecipies } from '../../context/RecipiesContext';
import RecipieSlider from '../RecipieSlider/RecipieSlider';

function Initial() {
  const { user } = useAuth();
  const { otherRecipies, setOtherRecipies } = useRecipies();

  const [currentRecipieIndex, setCurrentRecipieIndex] = useState(0);

  const showNextRecipie = () => {
    setCurrentRecipieIndex((prevIndex) => prevIndex + 1);
  };

  const showPreviousRecipie = () => {
    setCurrentRecipieIndex((prevIndex) => prevIndex - 1);
  };

  useEffect(() => {
    getOtherRecipies(user.id)
      .then((data) => {
        setOtherRecipies(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [setOtherRecipies]);

  // const handleClick = () => {
  //   console.log(otherRecipies)
  // }

  return (
    <div className="Initial">
      <div className="initial-container">
        {/* <h3 onClick={handleClick} >Caca</h3> */}
        {otherRecipies && otherRecipies.length > 0 ? (
        <>
          <RecipieSlider recipie={otherRecipies[currentRecipieIndex]} />
          {/* <button className='next-button' onClick={showNextRecipie}>Next Recipe</button> */}
        </>
      ) : (
        <p>No recipes available.</p>
      )}
      </div>
      <div className="initial-icons-container">
        <div className="initial-icons initial-icons-before">
          <img onClick={showPreviousRecipie} src={before} alt="" />
        </div>
        <div className="initial-icons initial-icons-cross">
          <img onClick={showNextRecipie} src={cross} alt="" />
        </div>
        <div className="initial-icons initial-icons-heart">
          <img src={heart} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Initial