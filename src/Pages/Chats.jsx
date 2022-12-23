import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ListItemAvatar from '@mui/material/ListItemAvatar';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});


function Chats() {


  const [messageList, setmessageList] = useState([]);
  const [chatList, setchatList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const target = event.target;
    const author = target.author.value;
    const text = target.text.value;

    setmessageList(prevState => [
      ...prevState, {
        id: giveLastId(prevState),
        author: author,
        text: text
      }
    ])
  }

  function giveLastId(arr) {
    return arr.lenght ? arr[arr.lenght - 1].id + 1 : 0
  }

  function botAnswer() {
    const lastAuthor = messageList[messageList.length - 1];
    if (lastAuthor && lastAuthor.author) {
      setmessageList(prevState => [
        ...prevState, {
          id: giveLastId(prevState),
          text: `Сообщение автора ${lastAuthor.author} отправлено`
        }
      ])
    }
  }

  useEffect(() => {
    setTimeout(() => {
      botAnswer()
    }, 1500);
  }, [messageList])

  return (
    <ThemeProvider theme={darkTheme}>

      <div style={{ display: 'flex', flexDirection: 'column', margin: '50px' }}>

        <div style={{ display: 'flex', paddingBottom: '50px' }}>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Chat 1"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Chat 2"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Chat 3"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Typography>
                    {' — Do you have Paris recommendations? Have you ever…'}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
          {messageList.map((message) => {
            return (
              <div key={message.id}>
                {message.author && <p><span>Автор:</span>{message.author}</p>}
                <p>{message.author && <span>Текст:</span>} {message.text} </p>
              </div>
            )
          })}
        </div>

        <form onSubmit={handleSubmit}>
          <TextField autoFocus id="standard-basic" label="Author" variant="standard" name='author' />
          <TextField autoFocus id="standard-basic" label="Message" variant="standard" name='text' />
          <Button type='submit' value='Отправить' variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </form>
      </div>
    </ThemeProvider>
  )
}
export default Chats;
