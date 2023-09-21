import './UserRecipies.css';
import goBackIcon from '../../assets/back-page.svg'
import { useAuth } from '../../context/AuthContext';
import { useState, useEffect } from 'react';
import { getUserRecipies } from '../../services/apiRecipies';
import { Recipie } from '../../Interfaces';

function UserRecipies() {
  const [recipies, setRecipies] = useState<Recipie[]>([])

  const { user } = useAuth();

  const goBack = () => {
    window.history.back();
  }

  useEffect(() => { 
    getRecipies(user.id);
  }, []);

  const getRecipies = (userId: string) => {
    getUserRecipies(userId)
      .then(data => {
        console.log(data)
        setRecipies(data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <>
      <div className="user-recipies-header">
        <img onClick={goBack} src={goBackIcon} className='goBack-Recipies' />
        <h3>My recipies</h3>
      </div>
      <div className='UserRecipies'>
        {recipies.map(recipie => (
          <div key={recipie._id} className="recipie-container">
            <img src={recipie.images[0]} />
            <p>{recipie.title}</p>
            {/* <p>{recipie.description}</p>
            <p>{recipie.ingredients}</p> */}
          </div>
        ))}
      </div>
    </>
  )
}

export default UserRecipies