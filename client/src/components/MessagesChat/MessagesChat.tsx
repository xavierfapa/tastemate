import './MessagesChat.css';
import goBackIcon from '../../assets/back-page.svg'
import { useNavigate } from 'react-router-dom';

function MessagesChat() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/messages')
  }

  return (
    <div className='MessagesChat'>
      <div className="chat-header">
        <div className="my-img">
          <img className='goback-chat' onClick={goBack} src={goBackIcon} />
        </div>
        <div className="user-img"></div>
        <div className="user-info">
          <div className="user-name">Username</div>
          <p>Other info</p>
        </div>
        <div className="delete">X</div>
      </div>
    </div>
  )
}

export default MessagesChat