function Hero({ onProjectsClick, onContactClick }) {
  return (
    <section id="home">
      <div className="container hero">
        <div className="hero-left">
          <div className="hero-left-tagline">
            <div className="tag-dot" />
            <span>Currently open for</span>
            <span className="tag-text-highlight">
              Internships & Remote Work
            </span>
          </div>

          <div className="hero-subtitle">Frontend · UI · Web Experiences</div>
          <h1 className="hero-title">
            Crafting <span>royal</span> web experiences for modern brands.
          </h1>

          <p className="hero-description">
            I’m Krishna, a frontend developer and BCA student who loves turning
            ideas into clean, responsive interfaces. I focus on intuitive UX,
            modern layouts, and pixel-perfect implementation using React, HTML,
            CSS, and JavaScript.
          </p>

          <div className="hero-actions">
            <button className="btn-primary" onClick={onProjectsClick}>
              View my projects <span>↗</span>
            </button>

            {/* Put your CV pdf in /public folder with same name */}
            <a
              href="/resume/Vatsal-Chaturvedi-RESUME.pdf.pdf"
              className="btn-ghost"
              download
            >
              RESUME
            </a>
          </div>

          <div className="hero-meta">
            <div className="hero-meta-item">
              <span className="hero-meta-label">Primary Stack</span>
              <span className="hero-meta-value">React · Tailwind · JS</span>
            </div>
            <div className="hero-meta-item">
              <span className="hero-meta-label">Based in</span>
              <span className="hero-meta-value">India · IST (+5:30)</span>
            </div>
            <div className="hero-meta-item">
              <span className="hero-meta-label">Preferred</span>
              <span className="hero-meta-value">Remote · WFH · Part-time</span>
            </div>
          </div>
        </div>

        <aside className="hero-card">
          <div className="hero-card-tag">Profile Snapshot</div>
          <div className="hero-card-name">Vatsal chaturvedi</div>

          <div className="hero-card-pill-row">
            <div className="pill gold">Frontend Developer</div>
            <div className="pill">BCA Student</div>
            <div className="pill">Problem Solver</div>
          </div>

          <p className="hero-card-subtitle">
            Passionate about building fast, responsive, and accessible
            interfaces. I enjoy clean code, reusable components, and
            collaborating with teams to ship meaningful products.
          </p>

          <div className="hero-card-grid">
            <div className="hero-card-stat">
              <div className="stat-label">Focus</div>
              <div className="stat-value">Frontend & UI</div>
            </div>
            <div className="hero-card-stat">
              <div className="stat-label">Currently learning</div>
              <div className="stat-value">React ecosystem</div>
            </div>
            <div className="hero-card-stat">
              <div className="stat-label">Collaboration</div>
              <div className="stat-value">Remote · Git · Teams</div>
            </div>
            <div className="hero-card-stat">
              <div className="stat-label">Goal</div>
              <div className="stat-value">First frontend role</div>
            </div>
          </div>

          <div className="hero-card-footer">
            <div className="hero-card-status">
              <span className="status-dot" />
              <span>Actively looking for opportunities</span>
            </div>
            <button className="hero-card-link" onClick={onContactClick}>
              Contact me →
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Hero;
