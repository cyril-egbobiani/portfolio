import "./App.css";
import AboutMeSection from "./components/AboutMeSection.jsx";
import HeaderSection from "./components/HeaderSection.jsx";
import Navbar from "./components/Navbar.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import Silk from "./components/SilkBackground.jsx";

function App() {
  return (
    <>
      <div>
        <div className="fixed inset-0 -z-10">
          <Silk
            speed={5}
            scale={0.7}
            color="#2E2E2E"
            noiseIntensity={1.5}
            rotation={0}
          />
        </div>
        <Navbar />
        {/* 
        <HeaderSection />
        <AboutMeSection />
        <SkillsSection />
        <ProjectsSection /> */}
      </div>
    </>
  );
}

export default App;
