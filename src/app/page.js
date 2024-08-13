'use client'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import {useState,useEffect} from "react"

export default function Home() {
  const [inputValue,setInputValue] = useState('');
  const [chatLog,setChatLog]=useState([]);
  const [isLoading,setisLoading]= useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setChatLog((prevChatLog) => [...prevChatLog, { type: 'user', message: inputValue }]);
    // Clear the input field after submitting
    setInputValue('');
  };

  return (
    <Container maxWidth={false} sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box
        sx={{
          border: (theme) => `2px solid ${theme.palette.primary.main}`,
          borderRadius: 2,
          width: '100%',
          maxWidth: 600,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
        }}
      >
        <Box
          sx={{
            backgroundColor: (theme) => theme.palette.primary.main,
            color: (theme) => theme.palette.primary.contrastText,
            borderTopLeftRadius: 2,
            borderTopRightRadius: 2,
            p: 2,
            height: '20%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h2">MUN-GPT</Typography>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            overflow: 'auto',
            p: 2,
            height: '60%',
          }}
        >
          {/* This is where the chat messages will be displayed */
            chatLog.map((message, index) => (
              <div key={index}>{message.message}</div>
            ))
          }
        </Box>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            p: 2,
            height: '20%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <InputBase placeholder="Type your message..." sx={{ flexGrow: 1, mr: 1 }} value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
          <Button variant="contained" color="primary" type='submit'>
            <i className="material-icons">send</i>
          </Button>
        </Box>
      </Box>
    </Container>
  );
}