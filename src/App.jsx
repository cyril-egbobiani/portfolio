import "./App.css";
import AboutMeSection from "./components/AboutMeSection.jsx";
import HeaderSection from "./components/HeaderSection.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <HeaderSection />
        <AboutMeSection />
      </div>
    </>
  );
}

export default App;
