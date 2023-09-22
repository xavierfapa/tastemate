import './Initial.css';
import { useState, useEffect } from 'react';
import { getOtherRecipies } from '../../services/apiRecipies';
import { useAuth } from '../../context/AuthContext';
import { useRecipies } from '../../context/RecipiesContext';

function Initial() {

  const { user } = useAuth();
  const { otherRecipies, setOtherRecipies } = useRecipies();

  const handleClick = () => console.log(user);

  useEffect(() => {
    getOtherRecipies(user.id)
      .then((data) => {
        setOtherRecipies(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [setOtherRecipies]);

  return (
    // <div className='Initial'>
    //   <h1 onClick={handleClick}>Initial</h1>
    // </div>
    <div>
    <h1>Recetas</h1>
    <ul>
      {otherRecipies.map((receta, index) => (
        <li key={index}>{receta.title}</li>
      ))}
    </ul>
  </div>
  )
}

export default Initial