import './UserRecipies.css';
import goBackIcon from '../../assets/back-page.svg'
import { useAuth } from '../../context/AuthContext';
import { useState, useEffect } from 'react';
import { getUserRecipies } from '../../services/apiRecipies';
import { Recipie } from '../../Interfaces';
import { useNavigate } from 'react-router-dom';

function UserRecipies() {
  const [recipies, setRecipies] = useState<Recipie[]>([])
  const { user } = useAuth();

  const navigate = useNavigate();

  const goBack = () => {
    navigate('/profile')
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

  const handleClick = (recipieId: string) => {
    console.log('cliked');
    console.log(recipieId)
    navigate(`/unique-recipie/${recipieId}`);
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
            <img src={recipie.images[0]} onClick={() => handleClick(recipie._id)} />
            <p>{recipie.title}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default UserRecipies