import SkillBar from "./SkillBar";

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="section-kicker">Skills</div>
            <h2 className="section-title">What I bring to the table.</h2>
          </div>
          <p className="section-subtitle">
            A solid foundation in web technologies, with a focus on clean
            layouts, responsive design, and modern frontend best practices.
          </p>
        </div>

        <div className="skills-grid">
          <div className="skills-card">
            <h3 className="skills-heading">Tech Stack & Tools</h3>
            <div className="skills-tags">
              <span className="skill-tag strong">React</span>
              <span className="skill-tag">JavaScript (ES6+)</span>
              <span className="skill-tag">HTML5</span>
              <span className="skill-tag">CSS3</span>
              <span className="skill-tag">Tailwind CSS</span>
              <span className="skill-tag">Git & GitHub</span>
              <span className="skill-tag">Responsive Design</span>
              <span className="skill-tag">Figma (basic)</span>
            </div>
            <p className="skills-note">
              Also comfortable with basic REST APIs, JSON, and working with
              existing UI libraries.
            </p>
          </div>

          <div className="skills-card">
            <h3 className="skills-heading">Strength overview</h3>
            <div className="skill-bars">
              <SkillBar label="React & Components" value={80} />
              <SkillBar label="HTML5 & Semantic UI" value={90} />
              <SkillBar label="Modern CSS / Flex / Grid" value={85} />
              <SkillBar label="JavaScript Logic" value={75} />
              <SkillBar label="Responsive Design" value={85} />
            </div>
            <p className="skills-note">
              Always improving via real projects, code reviews, and
              documentation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
