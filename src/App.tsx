import "./App.css";
import Header from "./components/Header/Header";
import SignIn from "./components/SignIn/SignIn";
import { Routes, Route } from "react-router-dom";
import Auth from './components/Auth/Auth'
import Contact from "./components/Contact/Contact";
import Students from "./components/Students/Students";
import Slider from "./components/Slider/Slider";
import Profil from "./components/Profil/Profil";
import Footer from './components/Footer/Footer';

import Info from "./components/Info/Info";
import Sandbox from "./components/Sandbox/Sandbox";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import Form from "./components/Form/Form";

import Tasks from "./components/Tasks/Tasks";


function App() {
  const token = useSelector((state:RootState) => state.signInSlice.token)
  return (
    <>
    <Header />
     {token ? <Auth/> : null }
      <Routes>
        <Route path={"/Chat"} element={<Profil/>} />
        <Route path={"/"} element={<Slider/>} />
        <Route path={"/login"} element={<SignIn />} />
        <Route path={"/student"} element={<Students/>} />
        <Route path={"/info"} element={<Info /> }  />
        <Route path={"/form"} element={<Form /> }  />
        <Route path={"/sandbox"} element={<Sandbox />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/tasks"} element={<Tasks />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
