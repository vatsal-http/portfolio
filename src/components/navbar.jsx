function Navbar({
  sections,
  activeSection,
  onNavClick,
  onContactClick,
  onToggleTheme,
}) {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <div className="logo">
          <div className="logo-mark">VC</div>
          <div>
            <div className="logo-text-main">Vatsal Chaturvedi</div>
            <div className="logo-text-sub">Frontend Developer</div>
          </div>
        </div>

        <nav className="nav-links">
          {sections.map((id) => (
            <button
              key={id}
              className={
                "nav-link" + (activeSection === id ? " active" : "")
              }
              onClick={() => onNavClick(id)}
            >
              {id === "home"
                ? "Home"
                : id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </nav>

        <div className="nav-right">
          <button className="btn-nav" onClick={onContactClick}>
            Let’s work together
          </button>

          <button
            className="theme-toggle"
            aria-label="Toggle theme"
            onClick={onToggleTheme}
          >
            <span className="theme-icon sun">☀</span>
            <span className="theme-icon moon">🌙</span>
            <div className="theme-thumb" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
