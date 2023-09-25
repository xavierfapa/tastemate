import Message from '../models/messages.model.js';

export async function postMessage (req, res) {
  const { message, senderId, receiverId, timestamp } = req.body;

  try {
    const newMessage = new Message({
      message,
      senderId,
      receiverId,
      timestamp
    })
    const savedMessage = await newMessage.save();
    res.json(savedMessage);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'error' });
  }
}

export async function getConversation (req, res) {
  try {
    const { userId1, userId2 } = req.params;

    const messages = await Message.find({
      $or: [
        { senderId: userId1, receiverId: userId2 },
        { senderId: userId2, receiverId: userId1 },
      ],
    }).sort({ createdAt: 'asc' });

    res.status(200).json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'error' });
  }
}

