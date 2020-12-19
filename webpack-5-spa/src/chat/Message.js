import React from 'react';
import { makeStyles } from '@material-ui/core';

const useMessageStyles = makeStyles(theme => ({
  message: {
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
    display: 'inline-block',
    alignSelf: 'flex-start',
    backgroundColor: '#F1EEEE',
    '& + &': {
      marginTop: theme.spacing(2),
    },
  },
  byMe: {
    backgroundColor: '#F0EE8A',
    alignSelf: 'flex-end',
  },
}));

function Message({content, byMe}) {
  const classes = useMessageStyles();

  return (
    <div className={[classes.message, byMe && classes.byMe].filter(Boolean).join(' ')}>
      {content}
    </div>
  );
};

export default Message;