import React from "react";
import { Routes, Route } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Vision from "./components/Vision";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPanel from "./components/MainPanel";
import People from "./components/People";
import Contacts from "./components/Contacts";
import Commerce from "./components/Commerce";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <MainPanel />
              <Vision />
              <Services />
              <People />
              <Contacts />
              <Footer />
              <ButtonGradient />
            </>
          }
        />
        <Route path="/commerce" element={
          <>
            <Commerce />
            <Footer />
          </>
        } />
      </Routes>
    </>
  );
};

export default App;
