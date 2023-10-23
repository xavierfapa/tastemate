import './Initial.css';
import cross from '../../assets/cross.png';
import before from '../../assets/before.png';
import heart from '../../assets/heart.png';

import { useState, useEffect } from 'react';
import { getOtherRecipies } from '../../services/apiRecipies';
import { postMatch, checkIfMatchExists, updateMatch } from '../../services/apiMatches';
import { useAuth } from '../../context/AuthContext';
import { useRecipies } from '../../context/RecipiesContext';
import { useMatch } from '../../context/MatchContext';
import RecipieSlider from '../RecipieSlider/RecipieSlider';

function Initial() {
  const { user } = useAuth();
  const { otherRecipies, setOtherRecipies } = useRecipies(null);
  const { setMatches } = useMatch();

  const [showMatch, setShowMatch] = useState(false);
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

  const handleMatch = () => {
    const user1 = otherRecipies[currentRecipieIndex].userId;
    const user2 = user.id;
    // console.log(user1, user2)
    checkIfMatchExists(user1, user2).then(match => {
      // console.log(match)
      if (match && match.user1 === user2) {
        console.log(match);
        setMatches(match);
        updateMatch(user1, user2).then(updatedMatch => {
          // console.log('Match updated:', updatedMatch);
          setShowMatch(true);
          showNextRecipie();
          setTimeout(() => {
            setShowMatch(false);
          }, 3000);
        });
        console.log('Match already exists');
      } else {
        postMatch({ user1, user2 }).then(data => {
          console.log(data);
          showNextRecipie();
        });
      }
    });
  }

  return (
    <div className="Initial">
      {showMatch && (
      <div className="its-a-match">
        <p>IT'S A</p>
        <h2>MATCH!</h2>
      </div>
      )}
      <div className="initial-container">
        {otherRecipies && otherRecipies.length > 0 ? (
        <>
          <RecipieSlider recipie={otherRecipies[currentRecipieIndex]} />
        </>
      ) : null}
      </div>
      <div className="initial-icons-container">
        <div className="initial-icons initial-icons-before">
          <img onClick={showPreviousRecipie} src={before} alt="" />
        </div>
        <div className="initial-icons initial-icons-cross">
          <img onClick={showNextRecipie} src={cross} alt="" />
        </div>
        <div className="initial-icons initial-icons-heart">
          <img onClick={handleMatch} src={heart} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Initial