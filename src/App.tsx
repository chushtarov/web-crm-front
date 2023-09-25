import "./App.css";
import Header from "./components/Header/Header";
import SignIn from "./components/SignIn/SignIn";
import { Routes, Route } from "react-router-dom";
// import Footer from "./components/Footer/Footer";
import Info from "./components/Info/Info";
// import ChatList from "./components/ChatList/ChatList";
import ChatRoom from "./components/ChatRoom/Chat";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/info" element={<Info />} />
        {/* <Route path="/" element={<ChatList />} /> */}
        <Route path={`/chat/:chatId`} element={<ChatRoom />} />
      </Routes>

      {/* <Footer /> */}
    </>
  );
}

export default App;
