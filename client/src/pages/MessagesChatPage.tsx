import MessagesChat from '../components/MessagesChat/MessagesChat';
import { useParams } from 'react-router-dom';

function MessagesChatPage() {
  const { receiverId } = useParams();

  return (
    <MessagesChat receiverId={receiverId} />
  )
}

export default MessagesChatPage