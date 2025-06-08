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
        {/* <div style={{ width: "100%", height: "600px", position: "relative" }}>
          <Dither
            waveColor={[0.5, 0.5, 0.5]}
            disableAnimation={false}
            enableMouseInteraction={true}
            mouseRadius={0.3}
            colorNum={4}
            waveAmplitude={0.3}
            waveFrequency={3}
            waveSpeed={0.05}
          />
        </div> */}
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
