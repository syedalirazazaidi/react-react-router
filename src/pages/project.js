import React from "react";
import { Link, Outlet } from "react-router-dom";
function Project() {
  return (
    <div>
      Project
      <nav>
        <Link to="project1">Project 1</Link>
        <Link to="project2">Project 2</Link>
        <Link to="project3">Project 3</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Project;
