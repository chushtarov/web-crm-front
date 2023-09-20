
import "./App.css";
import Header from "./components/Header/Header";
import SignIn from "./components/SignIn/SignIn";
import { Routes, Route } from "react-router-dom";
import Students from "./components/Students/Students";
import Footer from './components/Footer/Footer';


function App() {
  return (

    <>
    <Header />
      <Routes>
        <Route path={"/"} element={<Header/>} />
        <Route path={"/login"} element={<SignIn />} />
        <Route path={"/student"} element={<Students/>} />
      </Routes>
  <Footer/>
  </>
  )

}

export default App;
