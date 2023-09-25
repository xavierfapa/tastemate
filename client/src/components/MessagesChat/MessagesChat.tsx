import './MessagesChat.css';
import goBackIcon from '../../assets/back-page.svg';
import deleteIcon from '../../assets/options.png';
import sendIcon from '../../assets/send2.png';
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
        <img className="delete" src={deleteIcon} alt="" />
        {/* <div className="delete">{deleteIcon}</div> */}
      </div>
      <div className="chat-history">
        <p className='user1'>Hola como estas</p>
        <p className='user1'>Hola como estas Hola como estas Hola como estas Hola como estas Hola como estas Hola como estas</p>
        <p className='user2'>Hola como estas Hola como estas Hola como estas Hola como estas Hola como estas Hola como estas</p>
        <p className='user2'>Hola bien y tu?</p>
      </div>
      <div className="chat-footer">
        <input type="text" placeholder='Type something' />
        <div className="send-container">
          <img className="send-button" src={sendIcon} alt="" />
        </div>
      </div>
    </div>
  )
}

export default MessagesChat