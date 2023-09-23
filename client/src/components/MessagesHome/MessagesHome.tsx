import './MessagesHome.css';
import { useNavigate } from 'react-router-dom';

function MessagesHome() {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log('clicked')
    navigate('/messages-chat');
  }

  return (
    <div className='MessagesHome'>
      <div onClick={handleClick} className="chat-container">
        <div className="chat-image"></div>
        <div className="chat-container-content">
          <h3>Username</h3>
          <h4>Recipie Title</h4>
          <p>Last message</p>
        </div>
      </div>
    </div>
  )
}

export default MessagesHome