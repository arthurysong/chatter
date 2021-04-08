import Link from 'next/link'
import React from 'react';

const IndexPage = () => {
  let socket1,socket2;

  return <div>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
      <br/><br/>

      <button onClick={() => {
        socket1 = new WebSocket('ws://localhost:4000/ws/chat');
        socket1.addEventListener('open', function (event) {
          socket1.send(JSON.stringify({ data: {
            message: "Hello server!"
          }}))
          console.log("socket to SERVER 1 opened");
        });
    
        socket1.addEventListener("message", (event) => {
          console.log("event", event.data);
        })
      }}>Connect to http://localhost:4000 server (SERVER 1)</button>
      <button onClick={() => {
        socket1.send(JSON.stringify({
          data: { message: "blah blah blah" }
        }))
      }}>Send to SERVER 1</button>

      <br/><br/>
      <button onClick={() => {
        socket2 = new WebSocket('ws://localhost:4001/ws/chat');
        socket2.addEventListener('open', function (event) {
          socket2.send(JSON.stringify({ data: {
            message: "Hello server!"
          }}))
          console.log("socket to SERVER 2 opened");
        });
    
        socket2.addEventListener("message", (event) => {
          console.log("event", event.data);
        })
      }}>Connect to http://localhost:4001 server (SERVER 2)</button>
      <button onClick={() => {
        socket2.send(JSON.stringify({
          data: { message: "blah blah blah" }
        }))
      }}>Send to SERVER 2</button>
    </p>
  </div>
}

export default IndexPage