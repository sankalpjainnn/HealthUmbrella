
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";

import Body from "./components/header/Body";
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
function Start() {
  return (
    <>
    <Navbar/>
    <Body/>
    <Footer/>

    </>
  );
}

export default Start;
