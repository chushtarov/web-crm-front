
import "./App.css";
import Header from "./components/Header/Header";
import SignIn from "./components/SignIn/SignIn";
import { Routes, Route } from "react-router-dom";

import Footer from './components/Footer/Footer'


function App() {
  return (

    <>
      <Routes>
        <Route path={"/"} element={<Header />} />
        <Route path={"/login"} element={<SignIn />} />
      </Routes>
  <Footer/>
  </>
  )

}

export default App;
