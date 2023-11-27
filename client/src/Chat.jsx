// // import React, { useEffect, useState } from "react";
// // import ScrollToBottom from "react-scroll-to-bottom";

// // import "./App.css";

// // function Chat({ socket, username, room }) {
// //   const [currentMessage, setCurrentMessage] = useState("");
// //   const [messageList, setMessageList] = useState([]);

// //   const sendMessage = async () => {
// //     if (currentMessage !== "") {
// //       const messageData = {
// //         room: room,
// //         author: username,
// //         message: currentMessage,
// //         time:
// //           new Date(Date.now()).getHours() +
// //           ":" +
// //           new Date(Date.now()).getMinutes(),
// //       };
// //       await socket.emit("send_message", messageData);
// //       setMessageList((list) => [...list, messageData]);
// //       setCurrentMessage("");
// //     }
// //   };

// //   useEffect(() => {
// //     socket.on("receive_message", (data) => {
// //       console.log(data);
// //       setMessageList((list) => [...list, data]);
// //     });
// //   }, [socket]);
// //   return (
// //     <div className="chat-window">
// //       <div className="chat-header">
// //         <p>Live Chat</p>
// //       </div>
// //       <div className="chat-body">
// //         <ScrollToBottom className="message-container">
// //           {messageList.map((messageContent) => {
// //             return (
// //               <div
// //                 className="message"
// //                 id={username === messageContent.author ? "you" : "other" }
// //               >
// //                 <div>
// //                   <div className="message-content">
// //                     <p>{messageContent.message}</p>
// //                   </div>
// //                   <div className="message-meta">
// //                     <p id="time">{messageContent.time}</p>
// //                     <p id="author">{messageContent.author}</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             );
// //           })}
// //         </ScrollToBottom>
// //       </div>
// //       <div className="chat-footer">
// //       <input
// //           type="text"
// //           value={currentMessage}
// //           placeholder="Hey..."
// //           onChange={(event) => {
// //             setCurrentMessage(event.target.value);
// //           }}
// //           onKeyPress={(event) => {
// //             event.key === "Enter" && sendMessage();
// //           }}
// //         />
// //         <button onClick={sendMessage}>&#9658;</button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Chat;

// import React, { useEffect, useState } from "react";
// import ScrollToBottom from "react-scroll-to-bottom";

// function Chat({ socket, username, room }) {
//   const [currentMessage, setCurrentMessage] = useState("");
//   const [messageList, setMessageList] = useState([]);

//   const sendMessage = async () => {
//     if (currentMessage !== "") {
//       const messageData = {
//         room: room,
//         author: username,
//         message: currentMessage,
//         time:
//           new Date(Date.now()).getHours() +
//           ":" +
//           new Date(Date.now()).getMinutes(),
//       };

//       await socket.emit("send_message", messageData);
//       setMessageList((list) => [...list, messageData]);
//       setCurrentMessage("");
//     }
//   };

//   useEffect(() => {
//     socket.on("receive_message", (data) => {
//       setMessageList((list) => [...list, data]);
//     });
//   }, [socket]);

//   return (
//     <div className="chat-window">
//       <div className="chat-header">
//         <p>Live Chat</p>
//       </div>
//       <div className="chat-body">
//         <ScrollToBottom className="message-container">
//           {messageList.map((messageContent) => {
//             return (
//               <div
//                 className="message"
//                 id={username === messageContent.author ? "you" : "other"}
//               >
//                 <div>
//                   <div className="message-content">
//                     <p>{messageContent.message}</p>
//                   </div>
//                   <div className="message-meta">
//                     <p id="time">{messageContent.time}</p>
//                     <p id="author">{messageContent.author}</p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </ScrollToBottom>
//       </div>
//       <div className="chat-footer">
//         <input
//           type="text"
//           value={currentMessage}
//           placeholder="Hey..."
//           onChange={(event) => {
//             setCurrentMessage(event.target.value);
//           }}
//           onKeyPress={(event) => {
//             event.key === "Enter" && sendMessage();
//           }}
//         />
//         <button onClick={sendMessage}>&#9658;</button>
//       </div>
//     </div>
//   );
// }

// export default Chat;


// import React, { useEffect, useState } from "react";
// import ScrollToBottom from "react-scroll-to-bottom";
// // import "./Chat.css";

// function Chat({ socket, username, room }) {
//   const [currentMessage, setCurrentMessage] = useState("");
//   const [messageList, setMessageList] = useState([]);

//   const sendMessage = async () => {
//     if (currentMessage !== "") {
//       const messageData = {
//         room: room,
//         author: username,
//         message: currentMessage,
//         time: new Date().toLocaleTimeString(),
//       };

//       await socket.emit("send_message", messageData);
//       setMessageList((list) => [...list, messageData]);
//       setCurrentMessage("");
//     }
//   };

//   useEffect(() => {
//     socket.on("receive_message", (data) => {
//       setMessageList((list) => [...list, data]);
//     });
//   }, [socket]);

//   return (
//     <div className="chat-window">
//       <div className="chat-header">
//         <p>Live Chat</p>
//       </div>
//       <div className="chat-body">
//         <ScrollToBottom className="message-container">
//           {messageList.map((messageContent, index) => (
//             <div
//               key={index}
//               className={`message ${username === messageContent.author ? "you" : "other"}`}
//             >
//               <div>
//                 <div className="message-content">
//                   <p>{messageContent.message}</p>
//                 </div>
//                 <div className="message-meta">
//                   <p className="time">{messageContent.time}</p>
//                   <p className="author">{messageContent.author}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </ScrollToBottom>
//       </div>
//       <div className="chat-footer">
//         <input
//           type="text"
//           value={currentMessage}
//           placeholder="Hey..."
//           onChange={(event) => {
//             setCurrentMessage(event.target.value);
//           }}
//           onKeyPress={(event) => {
//             event.key === "Enter" && sendMessage();
//           }}
//         />
//         <button onClick={sendMessage}>&#9658;</button>
//       </div>
//     </div>
//   );
// }

// export default Chat;


import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

function Chat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time: new Date().toLocaleTimeString(),
      };

      // הוסף את ההודעה לרשימת ההודעות לאחר שהיא נשלחת
      setMessageList([...messageList, messageData]);

      await socket.emit("send_message", messageData);

      // אפס את ההודעה הנוכחית
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      // בתגובה להודעה שהתקבלה, הוסף אותה לרשימת ההודעות
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div className="chat-window">
      <div className="chat-header">
        <p>Live Chat</p>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent, index) => (
            <div
              key={index}
              className={`message ${username === messageContent.author ? "you" : "other"}`}
            >
              <div>
                <div className="message-content">
                  <p>{messageContent.message}</p>
                </div>
                <div className="message-meta">
                  <p className="time">{messageContent.time}</p>
                  <p className="author">{messageContent.author}</p>
                </div>
              </div>
            </div>
          ))}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="Hey..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
}

export default Chat;


// import React, { useEffect, useState } from "react";
// import ScrollToBottom from "react-scroll-to-bottom";
// import { Button, TextField } from "@mui/material";

// function Chat({ socket, username, room }) {
//   const [currentMessage, setCurrentMessage] = useState("");
//   const [messageList, setMessageList] = useState([]);

//   const sendMessage = async () => {
//     if (currentMessage !== "") {
//       const messageData = {
//         room: room,
//         author: username,
//         message: currentMessage,
//         time: new Date().toLocaleTimeString(),
//       };

//       // הוסף את ההודעה לרשימת ההודעות לאחר שהיא נשלחת
//       setMessageList([...messageList, messageData]);
//       console.log(messageList)

//       await socket.emit("send_message", messageData);

//       // אפס את ההודעה הנוכחית
//       setCurrentMessage("");
//     }
//   }

//   useEffect(() => {
//     socket.on("receive_message", (data) => {
//       // בתגובה להודעה שהתקבלה, הוסף אותה לרשימת ההודעות
//       setMessageList((list) => [...list, data]);
//     });
//   }, [socket]);

//   return (
//     <div className="chat-window">
//       <div className="chat-header">
//         <p>Live Chat</p>
//       </div>
//       <div className="chat-body">
//         <ScrollToBottom className="message-container">
//           {messageList.map((messageContent, index) => (
//             <div
//               key={index}
//               className={`message ${username === messageContent.author ? "you" : "other"}`}
//             >
//               <div>
//                 <div className="message-content">
//                   <p>{messageContent.message}</p>
//                 </div>
//                 <div className="message-meta">
//                   <p className="time">{messageContent.time}</p>
//                   <p className="author">{messageContent.author}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </ScrollToBottom>
//       </div>
//       <div className="chat-footer">
//         <TextField
//           type="text"
//           value={currentMessage}
//           placeholder="Hey..."
//           onChange={(event) => {
//             setCurrentMessage(event.target.value);
//           }}
//           onKeyPress={(event) => {
//             if (event.key === "Enter") sendMessage();
//           }}
//         />
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={sendMessage}
//         >
//           &#9658;
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default Chat;
