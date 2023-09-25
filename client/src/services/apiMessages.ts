import { Message } from "../Interfaces";

const BASE_URL = 'http://localhost:3000/api';

export async function postMessage (message: Message) {
  try {
    const response = await fetch(`${BASE_URL}/message`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(message)
    })
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getConversation (senderUserId: string, receiverUserId: string) {
  try {
    const response = await fetch(`${BASE_URL}/conversation/${senderUserId}/${receiverUserId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
