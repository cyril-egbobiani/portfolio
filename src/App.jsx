import "./App.css";
import Navbar from "./components/Navbar";
import HeaderSection from "./components/HeaderSection";
import AboutMeSection from "./components/AboutMeSection";
import SkillsSection from "./components/SkillsSection";
  function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeaderSection />
      <AboutMeSection />
      <SkillsSection />
      </div>
  );
}

export default App;
