import React from "react";
import Experience from "./Experience/Experience";
import Header from "./Header/Header";
import Contact_us from "./Contact_us/Contact_us"
import Footer from "../Footer/Footer";
import Contact_Button from "./Contact_button/Contact_Button";
import Think from "./Think/Think";
import Our_services from "./Our_services/Our_services";
// import './home.css'


function Home() {
  return (
    <div className="home">
      <Header />
      <Experience />
      <Our_services />
      <Think/>
      <Contact_Button/>
      <Contact_us />
      <Footer />
    </div>
  );
}
export default Home;
