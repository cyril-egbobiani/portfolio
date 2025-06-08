import "./App.css";
import AboutMeSection from "./components/AboutMeSection.jsx";
import HeaderSection from "./components/HeaderSection.jsx";
import Navbar from "./components/Navbar.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import Dither from "./components/Ditch.jsx";
import HeroSection from "./components/HeaderSection.jsx";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <HeroSection />
        <AboutMeSection />
        <SkillsSection />
        <ProjectsSection />
      </div>
    </>
  );
}

export default App;
