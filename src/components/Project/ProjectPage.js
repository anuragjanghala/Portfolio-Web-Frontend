import React from "react";
import { Link } from "react-router-dom";

const ProjectPage = () => {
  return (
    <React.Fragment>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, dont you think?</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </React.Fragment>
  );
};

export default ProjectPage;
