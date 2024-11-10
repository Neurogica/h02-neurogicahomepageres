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
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import Support from "./components/Support";

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
              <Footer />
              <ButtonGradient />
            </>
          }
        />
        <Route
          path="/people"
          element={
            <>
              <Header />
              <People />
              <Footer />
            </>
          }
        />
        <Route
          path="/contacts"
          element={
            <>
              <Header />
              <Contacts />
              <Footer />
            </>
          }
        />
        <Route
          path="/commerce"
          element={
            <>
              <Header />
              <Commerce />
              <Footer />
            </>
          }
        />
        <Route
          path="/privacy"
          element={
            <>
              <Header />
              <Privacy />
              <Footer />
            </>
          }
        />
        <Route
          path="/terms"
          element={
            <>
              <Header />
              <Terms />
              <Footer />
            </>
          }
        />
        <Route
          path="/support"
          element={
            <>
              <Header />
              <Support />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;
