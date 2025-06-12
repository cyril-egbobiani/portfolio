import "./App.css";
import Navbar from "./components/Navbar";
import HeaderSection from "./components/HeaderSection";
import AboutMeSection from "./components/AboutMeSection";
import SkillsSection from "./components/SkillsSection";
import ErrorBoundary from "./components/ErrorBoundary";
import ProjectsSection from "./components/ProjectsSection";
import Dither from "./components/Dither";

function App() {
  return (
    <ErrorBoundary>
      {/* Fixed Background */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background: "linear-gradient(180deg, #fff 0%, #f5f1f163 100%)",
        }}
      >
        <Dither
          waveColor={[0.85, 0.85, 0.85]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={1}
          waveFrequency={10}
          waveSpeed={0.05}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <HeaderSection />
        <AboutMeSection />
        <SkillsSection />
        <ProjectsSection />
      </div>
    </ErrorBoundary>
  );
}

export default App;
