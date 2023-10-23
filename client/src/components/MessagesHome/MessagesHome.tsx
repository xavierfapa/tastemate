import './MessagesHome.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getUserMatches } from '../../services/apiMatches';
import { useMatch } from '../../context/MatchContext';
import { useAuth } from '../../context/AuthContext';


function MessagesHome() {
  const { matches, setMatches } = useMatch();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleClick = (receiverId: string) => {
    navigate(`/messages-chat/${receiverId}`);
  }

  useEffect(() => {
    getUserMatches(user.id).then(matches => {
      const filteredMatches = matches.filter(match => match.mutualMatch === true);
      console.log(matches)
      setMatches(filteredMatches);
    }).catch(error => console.log(error))
  }, [])

  return (
    <div className='MessagesHome'>
      {matches && matches.length > 0 && matches.map((match, i) => {
        const otherUser = match.user1 === user.id ? match.user2 : match.user1;
        return (
          <div key={i} onClick={() => handleClick(otherUser)} className="chat-container">
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
