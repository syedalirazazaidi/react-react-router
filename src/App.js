import Header from "./Layouts/Headers/header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Project from "./pages/project";
import Contact from "./pages/contact";
import Project1 from "./pages/Projects.js/project1";
import Project3 from "./pages/Projects.js/project3";
import Project2 from "./pages/Projects.js/project2";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />}>
          <Route path="project1" element={<Project1 />} />
          <Route path="project2" element={<Project2 />} />
          <Route path="project3" element={<Project3 />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
