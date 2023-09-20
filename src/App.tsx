import "./App.css";
import Header from "./components/Header/Header";
import SignIn from "./components/SignIn/SignIn";
import { Routes, Route } from "react-router-dom";
import Students from "./components/Students/Students";
import Footer from './components/Footer/Footer';
import Info from "./components/Info/Info";

function App() {
  return (
    <>
    <Header />
      <Routes>

        <Route path={"/login"} element={<SignIn />} />
        <Route path={"/student"} element={<Students/>} />
        <Route path={"/info"} element={<Info />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
