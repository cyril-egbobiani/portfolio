import "./App.css";
import Navbar from "./components/Navbar";
import HeaderSection from "./components/HeaderSection";
import AboutMeSection from "./components/AboutMeSection";
import SkillsSection from "./components/SkillsSection";
import ErrorBoundary from "./components/ErrorBoundary";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  return (
    <ErrorBoundary>
      <div>
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
