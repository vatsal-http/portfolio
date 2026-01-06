function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="section-kicker">Journey</div>
            <h2 className="section-title">Experience & Education.</h2>
          </div>
          <p className="section-subtitle">
            Blending academic learning with self-driven projects and daily
            practice to grow as a frontend developer.
          </p>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot" />
            <h3 className="timeline-role">
              BCA Student – Internet Programming & Computer Graphics
            </h3>
            <div className="timeline-meta">2023 – Present · University · India</div>
            <p className="timeline-desc">
              Learning the fundamentals of computer science, web technologies,
              and programming concepts while applying them in practical
              projects.
            </p>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <h3 className="timeline-role">Self-learning Frontend Dev</h3>
            <div className="timeline-meta">Ongoing · Online · Remote</div>
            <p className="timeline-desc">
              Practicing React, building UI components, and exploring CSS
              layouts, animation, and performance through tutorials and personal
              projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
