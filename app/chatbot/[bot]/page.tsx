'use client'
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { baseUrl } from '@/constants/baseUrl';


const Chat = ({ params }:{params:any}) => {
  const [messages, setMessages] = useState<any>([{
    humanMessage: '',
    botMessage: ''
  
  }]);
  const [input, setInput] = useState('');
  const [ws, setWs] = useState<any>(null);

  const startChat = async () => {
    try {

      const customerId = localStorage.getItem('customerId');
      if(!customerId){
      const response = await axios.post(`${baseUrl}/api/chatbot/${params.bot}`);
      localStorage.setItem('customerId', response.data.customerId);
      console.log(response);
      const {customerId} = await response.data;
      console.log(customerId);
      }
     
    const socket = new WebSocket(`ws://localhost:5000/`+customerId);

    socket.onopen = () => {
      console.log('Connected to the server');
    };

    socket.onmessage = (event) => {
      setMessages((prevMessages:any) => [...prevMessages,{humanMessage:input, botMessage:event.data}]);
    };

    socket.onclose = () => {
      console.log('Disconnected from the server');
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    setWs(socket);

    return () => {
      socket.close();
    };
  } catch (error) {
    console.error(error);
  }
  }
  

  useEffect(() => {
      startChat();
   
  }, []);

  // useQuery({
  //   queryKey: ['start'],
  //   queryFn: () => startChat(params),
  // });

  const sendMessage = (e:any) => {
    e.preventDefault();
   
    if (ws && input) {
      ws.send(input);
      setMessages((prevMessages:any) => [...prevMessages,{humanMessage:input}])
      setInput('');
    }
  };

  return (
    <div className='absolute left-0 text-white gap-7 bg-[#131313] py-3 min-h-[100vh] px-8 w-full flex'>
      <section className='relative min-w-[30%] py-6'>
        <h1 className='text-[30px] font-bold mb-10'>
          AXIOM
        </h1>
        <ul className='relative h-full space-y-4'>
          <h4 className='text-white/50 text-lg '>
            <KeyboardArrowDownIcon />main page
          </h4>
          <li 
          onClick={() => startChat()}
          className='flex items-center gap-4 p-3 bg-white/20 rounded-lg'><ChatRoundedIcon />Chatbot</li>
          <li className='flex items-center gap-4 p-3'><EmailRoundedIcon /> Send Message</li>
        </ul>
      </section>
      <section className='bg-white/5 px-9 rounded-3xl space-y-3 py-4 w-full'>
        <h1 className='text-[25px] font-bold pb-2 border-b-[1px] border-white/20'>Chat with Jinx</h1>

        <div  className='bg-[#131313] space-y-2 p-3 min-h-[70vh] max-h-[60vh] overflow-y-scroll text-[16px] rounded-3xl'>
          {messages.map((msg:any, index:number) => (
            msg.humanMessage != '' || msg.botMessage != '' ?
            <>
            {msg.humanMessage !== '' &&
            <p key={index} className='px-4 py-2  rounded-lg bg-white/5'>{msg.humanMessage}</p>}
            {msg.botMessage !== '' && 
            <p key={index} className='px-4 py-2 rounded-lg'><ReactMarkdown>{msg.botMessage}</ReactMarkdown></p>}
            </>
            : null
            
          ))}
        </div>

        <form onSubmit={sendMessage} className='relative'>
          <input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            placeholder="Type a message..." 
            // style={{all: 'unset'}}
            className='w-full  focus:bg-transparent 
            focus:outline-none border-2 border-white/20 py-3 bg-transparent px-5 rounded-md' 
          />
          <button type='submit' className='absolute right-8 top-3'>
            <SendIcon />
          </button>
        </form>
      </section>
    </div>
  );
};

export default Chat;
