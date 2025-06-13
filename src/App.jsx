import "./App.css";
import Navbar from "./components/Navbar";
import HeaderSection from "./components/HeaderSection";
import AboutMeSection from "./components/AboutMeSection";
import SkillsSection from "./components/SkillsSection";
import ErrorBoundary from "./components/ErrorBoundary";
import ProjectsSection from "./components/ProjectsSection";
import LiquidChrome from "./components/Chrome";

function App() {
  return (
    <ErrorBoundary>
      {/* Fixed Background */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          width: "100vw",
          height: "100vh",
          background: "linear-gradient(180deg, #fff 0%, #f5f1f163 100%)",
        }}
      >
        <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
          <LiquidChrome
            baseColor={[0.9, 0.9, 1]}
            speed={0.2}
            amplitude={0.05}
            interactive={true}
            // If your LiquidChrome accepts width/height props, pass them here
            // width="100vw"
            // height="100vh"
          />
        </div>
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
