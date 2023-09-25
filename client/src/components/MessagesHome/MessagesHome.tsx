import './MessagesHome.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getUserMatches } from '../../services/apiMatches';
import { useMatch } from '../../context/MatchContext';
import { useAuth } from '../../context/AuthContext';

function MessagesHome() {
  const { matches, setMatches } = useMatch();
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleClick = () => {
    console.log('clicked')
    navigate('/messages-chat');
  }

  useEffect(() => {
    getUserMatches(user.id).then(data => {
      console.log(data)
      setMatches(data);
    }).catch(error => console.log(error))
  }, [])

  return (
    <div className='MessagesHome'>
      {matches && matches.length > 0 && matches.map((match, i) => {
        const otherUser = match.user1 === user.id ? match.user2 : match.user1;
        return (
          <div key={i} onClick={handleClick} className="chat-container">
            <div className="chat-image"></div>
            <div className="chat-container-content">
              <h3>{otherUser}</h3>
              <h4>Recipie Title</h4>
              <p>Last message</p>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default MessagesHome

      {/* <div onClick={handleClick} className="chat-container">
        <div className="chat-image"></div>
        <div className="chat-container-content">
          <h3>Username</h3>
          <h4>Recipie Title</h4>
          <p>Last message</p>
        </div>
      </div> */}