import { Route, Routes } from "react-router-dom";
import colorTokens from "./tokens/color/color-tokens.json";

import Homepage from "./components/pages/homepage/Homepage";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";

import classes from "./App.module.css";
// import CookieOverlay from "./components/overlays/Cookies/CookieOverlay";
// import ArticlePage from "./components/pages/articlepage/ArticlePage";
import Experience from "./components/experience/Experience";
import Education from "./components/education/Education";
//import ProjectsPage from "./components/pages/projectspage/ProjectsPage";
// import CertificatesPage from "./components/pages/certificatespage/CertificatesPage";
import SkillsPage from "./components/pages/skillspage/SkillsPage";
// import HobbiesPage from "./components/pages/hobbiespage/HobbiesPage";
//import BlogsPage from "./components/pages/blogspage/BlogsPage";
import { ThemeProvider, useTheme } from "stelios";
import VariantProvider from "./components/VariantProvider/VariantProvider";

const AppContent = () => {
  const theme = useTheme().theme;
  const colorPalette = theme.colorPalette;
  const appearance = colorPalette.primary.appearance;
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: appearance === "light" ? "white" : "#202124",
      }}
    >
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route
          path="/project/:idTitle"
          element={<ArticlePage type="projects" />}
        /> */}
        {/* <Route
          path="/education/:idTitle"
          element={<ArticlePage type="educations" />}
        /> */}
        {/* <Route path="/skill/:idTitle" element={<ArticlePage type="skills" />} /> */}
        {/* <Route
          path="/hobby/:idTitle"
          element={<ArticlePage type="hobbies" />}
        /> */}
        {/* <Route path="/blog/:idTitle" element={<ArticlePage type="blogs" />} /> */}
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills/" element={<SkillsPage />} />
        {/* <Route path="/hobbies" element={<HobbiesPage />} /> */}
        {/* <Route path="/blogs" element={<BlogsPage />} /> */}
      </Routes>
    </div>
  );
};

function App() {
  return (
    <div className={classes.app}>
      <VariantProvider variant="neumorph">
        <ThemeProvider
          accents={{
            primary: colorTokens.accent.primary,
            black: colorTokens.accent.black,
          }}
          appearance={colorTokens.appearance}
        >
          <Header />
          <AppContent />
          <Footer />
          {/* <CookieOverlay /> */}
        </ThemeProvider>
      </VariantProvider>
    </div>
  );
}

export default App;
