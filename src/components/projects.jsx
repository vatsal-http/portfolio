import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="section-kicker">Projects</div>
            <h2 className="section-title">Hands-on work I’ve done.</h2>
          </div>
          <p className="section-subtitle">
            A selection of projects showing my ability to build responsive UIs,
            handle state, and work with modern frontend tools.
          </p>
        </div>

        <div className="projects-grid">
          <ProjectCard
            type="Featured"
            title="Password Generator"
            description="Built with React and Tailwind CSS, lets users generate secure passwords with custom length and options."
            tags={["React", "Tailwind", "State Management"]}
            link="https://react-password-ecru.vercel.app/"
            status="Deployed"
          />
          <ProjectCard
            type="Web App"
            title="Responsive Portfolio"
            description="A modern single-page portfolio with smooth scrolling, theme toggle, and reusable components."
            tags={["React", "CSS", "SPA"]}
            link="#"
            status="Depl"
          />
          <ProjectCard
            type=""
            title=""
            description=""
            tags={["", ""]}
            link="#"
            status=""
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
