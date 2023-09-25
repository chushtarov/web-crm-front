// ChatList.tsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchChats } from "../../features/chatsSlice";
import { AppDispatch, RootState } from "../../app/store";

function ChatList() {
  const dispatch = useDispatch<AppDispatch>();
  const chats = useSelector((state: RootState) => state.chat.chats);

  useEffect(() => {
    dispatch(fetchChats());
  }, [dispatch]);

  return (
    <div className="chat-list">
      <h2>Chat List</h2>
      <ul>
        {chats.map((chat) => (
          <li key={chat.id}>
            <Link to={`/chat/${chat.id}`}>{chat.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChatList;
