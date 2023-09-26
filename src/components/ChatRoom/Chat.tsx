// ChatRoom.tsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchMessages,
  sendMessage,
  deleteMessage,
} from "../../features/messagesSlice";
// import { fetchChats } from "../../features/chatsSlice";
import { AppDispatch, RootState } from "../../app/store";
// import { v4 as uuidv4 } from "uuid";
import { fetchUsers, oneUser } from "../../features/usersSlice";
import styles from "./ChatRoom.module.css";
import { io, Socket } from "socket.io-client";

function ChatRoom() {
  const { chatId } = useParams<{ chatId: string }>();
  const chat = useSelector((state: RootState) => state.chat);
  const userOne = useSelector((state: RootState) => state.usersSlice.oneUser);
  const dispatch = useDispatch<AppDispatch>();
  const messages = useSelector((state: RootState) => state.messages.messages);
  const [messageInput, setMessageInput] = useState("");
  const users = useSelector((state: RootState) => state.usersSlice.users);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messagess, setMessages] = useState<{ text: string; name: string }[]>(
    []
  );

  useEffect(() => {
    if (chatId) {
      dispatch(fetchMessages(chatId));
      dispatch(fetchUsers());
      dispatch(oneUser());
    }

    const newSocket = io("http://localhost:3000"); // Создание экземпляра Socket

    newSocket.on("connect", () => {
      console.log("Connected to WebSocket server");

      // const defaultMessage = { text: "Welcome to the chat!", name: "System" };
      // setMessages([defaultMessage]);
    });

    newSocket.on("chatMessage", (message) => {
      dispatch(sendMessage(message));
    });

    setSocket(newSocket); // Сохранение экземпляра Socket в состоянии

    return () => {
      newSocket.disconnect();
    };
  }, [chatId, dispatch]);

  const sendMessageHandler = () => {
    if (messageInput.trim() && userOne) {
      const newMessage = {
        text: messageInput,
        sender: userOne._id,
        chat: chatId,
      };
      socket?.emit("newMessage", newMessage);
    }

    setMessageInput("");
  };

  console.log(users);
  console.log(messages);

  function getUsernameColor(username) {
    let hash = 0;
    for (let i = 0; i < username.length; i++) {
      hash = username.charCodeAt(i) + ((hash << 5) - hash);
    }
    const color = "#" + ((hash & 0x00ffffff) | 0x808080).toString(17);
    return color;
  }

  const deleteMessageHandler = (messageId: string) => {
    dispatch(deleteMessage(messageId));
  };

  return (
    <div className={styles.chatRoom}>
      <div className={styles.chatHeader}>Chat Room {chat.chats[0]?.name}</div>
      <div className={styles.chatMessages}>
        {messages.map((message) => (
          <div key={message.id} className={styles.message}>
            {users.map((user) =>
              user._id === message.sender ? (
                <div
                  key={user._id}
                  style={{ color: getUsernameColor(user.login) }}
                >
                  {user.login}
                </div>
              ) : null
            )}
            <div className={styles.messageText}>{message.text}</div>
            {userOne && userOne._id === message.sender ? (
              <div className={styles.deleteButton}>
                <button onClick={() => deleteMessageHandler(message.id)}>
                  Удалить
                </button>
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <div className={styles.chatInput}>
        <input
          type="text"
          placeholder="Напишите сообщение..."
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
        />
        <button onClick={sendMessageHandler} className={styles.button}>
          Отправить
        </button>
      </div>
    </div>
  );
}

export default ChatRoom;
