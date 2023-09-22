import './Initial.css';
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
      {/* <h3 onClick={handleClick} >Caca</h3> */}
      {/* <RecipieSlider recipie={otherRecipies[currentRecipieIndex]} /> */}
      <button onClick={showNextRecipie}>Next Recipe</button>
    </div>
  )
}

export default Initial