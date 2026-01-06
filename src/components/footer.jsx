function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          © {year}{" "}
          <span className="footer-highlight">Vatsal Chaturvedi</span>. All
          rights reserved.
        </div>
        <div className="footer-links">
          <span>Frontend Developer</span>
          <span>React · JS · UI</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
