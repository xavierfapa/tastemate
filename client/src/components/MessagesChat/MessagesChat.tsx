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
import { useParams } from 'react-router-dom';

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

  const { receiverId } = useParams();

  useEffect(() => {
    const senderUserId = user.id;
  
    console.log('cocacola: ', senderUserId, receiverId);
    getConversation(senderUserId, receiverId).then(conversation => {
      console.log(conversation);
      setChatHistory(conversation);
    });
  }, [receiverId]);

  const submitMessage = handleSubmit(async (message: Message) => {
    const match = matches.find((m) => {
      return m.user1 === user.id || m.user2 === user.id;
    });

    if (!match) {
      return;
    }

    const messageObject = {
      senderId: user.id,
      receiverId: receiverId,
      message: message.message,
      timestamp: Date.now()
    };

    // optimistic rendering
    setChatHistory(prevState => [...prevState, messageObject]);
    try {
      await postMessage(messageObject);
    } catch {
      alert('Failed to send message.');
      setChatHistory(prevState => prevState.slice(0, prevState.length-2));
    }
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
          const timestamp = new Date(message.timestamp);
          // console.log('timestamp', timestamp)
          const formattedDate = format(timestamp, 'HH:mm');
          // console.log('formattedDate', formattedDate)
          return (
            <div key={index} className={message.senderId === user.id ? 'user2-container' : 'user1-container'}>
              {/* <p className={message.senderId === user.id ? 'user2' : 'user1'}>{message.message}</p> */}
              <p className={message.senderId === user.id ? 'user2' : 'user1'}>{message.message}<span className={message.senderId === user.id ? 'date2' : 'date1'}>{formattedDate}</span></p>
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