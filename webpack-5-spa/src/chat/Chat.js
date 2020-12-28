import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles, Box, InputBase } from '@material-ui/core';
import { sendMessage, getMessages } from './api';
import Message from './Message';
import MembersList from './MembersList';

const useChatStyles = makeStyles(theme => ({
  container: {
    position: 'fixed',
    zIndex: '100000',
    right: 12,
    top: theme.spacing(1),
    height: 284,
    width: 240,
    border: '1px solid black',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(1),
    overflow: 'hidden',
  },
  chatName: {
    fontSize: 14,
    height: 16,
    margin: 0,
  },
  messagesContainer: {
    height: 'calc(100% - 48px)',
    borderBottom: '1px solid #DADADA',
    paddingBottom: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    flexShrink: '0',
    overflowY: 'auto',
  },
  input: {
    height: 24,
    flexShrink: '0',
  },
}));

function Chat() {
  const recipientId = 'Cnz9KoUaCsm2tF11P9q5'; //useSelector(state => state.chat.ricipientId);
  const classes = useChatStyles();
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages ] = useState([]);
  const chatId = useSelector(state => state.chatId);
  const authId = 'lvvSNZ609WCMjyOrQlC5';

  useEffect(() => {
    if(chatId) {
      fetchMessages();
    }
  }, [fetchMessages, chatId]);

  const fetchMessages = () => getMessages(chatId).then((result) => {
    const messagesData = result.data.documents;
    console.log(messagesData);
    const messagesFormated = messagesData.map((item) => {
      let message = {};
      Object.keys(item.fields).forEach((key) => {
        message[key] = Object.values(item.fields[key])[0];
      });
      return message;
    });
    messagesFormated.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return 1;
      } else if (a.createdAt < b.createdAt) {
        return -1;
      }
      return 0;
    });
    setMessages(messagesFormated);
  });

  const onMessageChange = ({ target }) => {
    const value = target.value;

    setNewMessage(value);
  };

  const onMessageSend = e => {
    if (e.key === 'Enter') {
      sendMessage(chatId, newMessage, authId)
        .then(() => {
          setNewMessage('');
          fetchMessages();
        });
    }
  };

  return (
    <>
      <MembersList />
      <Box className={classes.container}>
        <h1 className={classes.chatName} >
          Chat: {chatId}
        </h1>
        <div data-testid="messages-container" className={classes.messagesContainer}>
          {messages.map(message => <Message content={message.content} byMe={authId === message.author} />)}
        </div>
        <InputBase
          value={newMessage} 
          onChange={onMessageChange} 
          onKeyDown={onMessageSend} 
          placeholder={'Type a message...'}
          className={classes.input}
        />
      </Box>
    </>
  );
};

export default React.memo(Chat);