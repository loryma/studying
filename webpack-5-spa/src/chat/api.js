import axios from "axios";
const BASE_URL =
  "https://firestore.googleapis.com/v1/projects/chat-fcdfb/databases/(default)/documents/";

export const getMessages = (chatId) => {
  return axios.get(BASE_URL + `chats/${chatId}/messages`);
};

export const sendMessage = (chatId, content, author) => {
  return axios.post(BASE_URL + `chats/${chatId}/messages`, {
    fields: {
      content: { stringValue: content },
      author: { stringValue: author },
      createdAt: { timestampValue: new Date() },
    },
  });
};
