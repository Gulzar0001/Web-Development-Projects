import React from "react";

import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";
import MainStack from "./navigation/MainStack";
import Sidebar from "./navigation/Sidebar";
import Navbar from "./navigation/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  const main = true;

  return (
    <BrowserRouter>
      {main ? (
        <>
          <Header />
          <Navbar /> 
          <MainStack />
          <Footer/>
        </>
      ) : (
        <>
      
        <Sidebar/>  
        <MainStack />
      
           </>
      )}
    </BrowserRouter>
  );
}


export default App;
