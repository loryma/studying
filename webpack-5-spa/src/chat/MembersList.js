import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../redux/actions';

function MembersList() {
  const chats = ['AnN7n46VFz5AyNHhqsGg', 'JduiAwhUtLfRulMMuNEL'];
  const dispatch = useDispatch();

  const onClick = (chatId) => {
    dispatch(actions.setRecepient(chatId));
  }

  return (
    <div>
      <h2>Chat list</h2>
      <ul>
        {chats.map( chat => <li key={chat} onClick={() => onClick(chat)}>{chat}</li>)}
      </ul>
    </div>
  );
};

export default MembersList;