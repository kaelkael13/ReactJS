import { useEffect, useState } from 'react';
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});


function App() {

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
          <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <nav aria-label="main mailbox folders">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
            <Divider />
            <nav aria-label="secondary mailbox folders">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Trash" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#simple-list">
                    <ListItemText primary="Spam" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>
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
export default App;
