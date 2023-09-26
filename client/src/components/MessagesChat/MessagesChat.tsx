import './MessagesChat.css';
import goBackIcon from '../../assets/back-page.svg';
import deleteIcon from '../../assets/options.png';
import sendIcon from '../../assets/send-white.png';

import { format } from 'date-fns';
import { useState, useEffect } from 'react';
import { Message } from '../../Interfaces';
import { useForm } from 'react-hook-form';
import { postMessage, getConversation } from '../../services/apiMessages';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useMatch } from '../../context/MatchContext';

function MessagesChat() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<Message>();
  const { user } = useAuth();
  const { matches } = useMatch();
  const [chatHistory, setChatHistory] = useState<Message[]>([]);
  const [messageText, setMessageText] = useState("");

  const goBack = () => {
    navigate('/messages');
  }

  useEffect(() => {
    const senderUserId = user.id;
    
    const match = matches.find((m) => {
      return m.user1 === user.id || m.user2 === user.id;
    });

    if (match) {
      const receiverUserId = user.id === match.user1 ? match.user2 : match.user1;
      console.log('cocacola: ', senderUserId, receiverUserId);
      getConversation(senderUserId, receiverUserId).then(conversation => {
        console.log(conversation);
        setChatHistory(conversation);
      });
    }
  }, []);

  const submitMessage = handleSubmit(async (message: Message) => {
    const match = matches.find((m) => {
      return m.user1 === user.id || m.user2 === user.id;
    });

    if (!match) {
      return;
    }

    const messageObject = {
      senderId: user.id,
      receiverId: match.user1 === user.id ? match.user2 : match.user1,
      message: message.message,
      timestamp: Date.now()
    };

    await postMessage(messageObject);
    setChatHistory(prevState => [...prevState, messageObject]);
    setMessageText('');
  });

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
      </div>
      
      <div className="chat-history">
        {chatHistory.map((message, index) => {
          const createdAt = new Date(message.createdAt);
          const formattedDate = format(createdAt, 'HH:mm');
          return (
            <div key={index} className={message.senderId === user.id ? 'user1-container' : 'user2-container'}>
              <p className={message.senderId === user.id ? 'user1' : 'user2'}>{message.message}<span className={message.senderId === user.id ? 'date1' : 'date2'}>{formattedDate}</span></p>
            </div>
          );
        })}
      </div>

      <form onSubmit={submitMessage} className="chat-footer">
        <input value={messageText} type="text" placeholder='Type something' {...register("message", { required: true })} onChange={(e) => setMessageText(e.target.value)} />
        <button type='submit' className="send-container">
          <img className="send-button" src={sendIcon} alt="" />
        </button>
      </form>
    </div>
  )
}

export default MessagesChat


      {/* <div className="chat-history">
        {chatHistory.map((message, index) => (
          <div key={index} className={message.senderId === user.id ? 'user1-container' : 'user2-container'}>
            <p className={message.senderId === user.id ? 'user1' : 'user2'}>{message.message}</p>
            <p>{message.createdAt}</p>
          </div>
        ))}
      </div> */}