import express from 'express';
import dotenv from 'dotenv';
import cors from'cors';

// const express = require ('express');
// const dotenv = require ('dotenv' );

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
// app.get('/', (req, res) => { 
//     res.send('<h1>Server is ready</h1>');
// });



// var corsOptions = {
//     origin: 'http://localhost:3000',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//     }
//app.use (cors(corsOptions))
app.use (cors)
app.get('/api/jokes',(req,res)=>{
    const jokes =  [
          {
            "id": 1,
            "type": "programming",
            "setup": "Why do programmers prefer dark mode?",
            "punchline": "Because light attracts bugs!"
          },
          {
            "id": 2,
            "type": "programming",
            "setup": "How many programmers does it take to change a light bulb?",
            "punchline": "None. It's a hardware problem."
          },
          {
            "id": 3,
            "type": "programming",
            "setup": "Why do Java developers wear glasses?",
            "punchline": "Because they don't see sharp."
          },
          {
            "id": 4,
            "type": "programming",
            "setup": "What is a programmer's favorite hangout place?",
            "punchline": "Foo Bar."
          },
          {
            "id": 5,
            "type": "programming",
            "setup": "Why do Python programmers prefer snake_case?",
            "punchline": "Because they can't handle CamelCase."
          },
          {
            "id": 6,
            "type": "programming",
            "setup": "What do you call a group of 8 Hobbits?",
            "punchline": "A hobbyte."
          },
          {
            "id": 7,
            "type": "programming",
            "setup": "Why do programmers hate nature?",
            "punchline": "It has too many bugs."
          },
          {
            "id": 8,
            "type": "programming",
            "setup": "What's a programmer's favorite place to lay back and relax?",
            "punchline": "The JavaScript callback."
          },
          {
            "id": 9,
            "type": "programming",
            "setup": "How do you comfort a JavaScript bug?",
            "punchline": "You console it."
          },
          {
            "id": 10,
            "type": "programming",
            "setup": "Why was the developer unhappy at their job?",
            "punchline": "They wanted arrays."
          }
        ];
        res.send(jokes)
})

app.listen(port, () => {
    console.log(`Server is started on port ${port}`); 
});
