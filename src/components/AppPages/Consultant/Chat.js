import React, {useEffect, useState} from 'react';
import consultantstyles from './Consultant.module.scss';
import {Grid} from '@material-ui/core';
import './Chat.css';
import moment from 'moment';
import firebase from '../../../utils/firebase';

const db = firebase.firestore().collection('messages');
const hourMilliSeconds = 1000 * 60 * 60;
const offset = (-new Date().getTimezoneOffset() / 60) * hourMilliSeconds;

const Chat = ({userId, otherUserId, otherUserName, openChatField}) => {
  const [pendingMessage, setPendingMessage] = useState('');
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    getMessages();
  }, [userId, otherUserId]);

  const getMessages = () => {
    db
        .onSnapshot((snapshot) => {
          const message_buf = [];
          snapshot.forEach((doc) => {
            if (
              doc.data().id &&
            ((doc.data().from === userId && doc.data().to === otherUserId) ||
            (doc.data().from === otherUserId && doc.data().to === userId))
            ) {
              message_buf.push({
                id: doc.data().id, 
                isOwnMessage: doc.data().from === userId, 
                body: doc.data().body, 
                date: doc.data().date.seconds
              });
            }
          });
          message_buf.sort((a, b) => (a.date < b.date ? -1 : 0));
          setMessages(message_buf);
        });
  };

  const handleMessageKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
      setPendingMessage('');
    }
  };

  const handleMessageChange = (event) => {
    setPendingMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (pendingMessage === '') {
      return;
    } else {
      db
          .add({
            from: userId, 
            to: otherUserId, 
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            body: pendingMessage,
          })
          .then((docRef) => {
            db
                .doc(docRef.id)
                .update({id: docRef.id})
                .then(() => {
                  setPendingMessage('');
                  console.log('success');
                })
                .catch((error) => {
                  console.log(error);
                });
          })
          .catch((error) => {
            console.log(error);
          });
    }
  };
  return (
    <Grid
      container className={consultantstyles['chat']}
      style={{visibility: openChatField? 'visible' : 'hidden'}}
    >
      <Grid item xs={12} className={consultantstyles['Chat__titlebar__details']}>
        <span>{otherUserId ?
                    'No Message Yet' :
                    otherUserName}
        </span>
      </Grid>

      <Grid container item className={consultantstyles['Chat__messages']} >
        {messages.map((m) => (
          <Message key={m.id} {...m} />
        ))}
      </Grid>
      <Grid container item className={consultantstyles['Chat__compose']}>
        <input
          className={consultantstyles['Chat__compose__input']}
          type="text"
          placeholder="Type a message..."
          value={pendingMessage}
          onChange={handleMessageChange}
          onKeyDown={handleMessageKeyDown}
        />
        <button className={consultantstyles['Chat__compose__button']} onClick={handleSendMessage}>
                    Send
        </button>
      </Grid>
    </Grid>
  );
};


function Message({isOwnMessage, date, body}) {
  return (
    <Grid
      container
      direction="row"
      justify={ isOwnMessage? 'flex-end' : 'flex-start' }
      style={{marginTop: '1rem'}}
    >
      <Grid className="Chat__messages__message__wrapper__inner">
        <Grid
          className={
            isOwnMessage ?
              'Chat__messages__message Chat__messages__message--self' :
              'Chat__messages__message Chat__messages__message--other'
          }
        >
          <Grid className="Chat__messages__message__content">{body}</Grid>
          <Grid className="Chat__messages__message__time">
            {moment(date * 1000).format('lll')}
          </Grid>
          <Grid
            className={
              isOwnMessage ?
                'Chat__messages__message__arrow alt' :
                'Chat__messages__message__arrow'
            }
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Chat;
