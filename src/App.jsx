import ButtonGradient from "./assets/svg/ButtonGradient";
import Vision from "./components/Vision";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPanel from "./components/MainPanel";
import People from "./components/People";
import Contacts from "./components/Contacts";
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <MainPanel />
              <Vision />
              <Services />
              <Footer />
            </>
          } />
          <Route path="/people" element={<People />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
