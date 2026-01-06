import { useState } from "react";

function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const response = await fetch("https://formspree.io/f/xlgeqolr", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: new FormData(form),
    });

    if (response.ok) {
      setStatus("Message sent successfully ✅");
      form.reset();
    } else {
      setStatus("Something went wrong ❌");
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="section-kicker">Contact</div>
            <h2 className="section-title">Let’s build something.</h2>
          </div>
          <p className="section-subtitle">
            Looking for internships, trainee roles, or part-time frontend work.
            I’d love to hear about your team and projects.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label className="form-label" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  className="form-input"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-row">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  className="form-input"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="form-row">
                <label className="form-label" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="Tell me about the role, project, or idea..."
                  required
                />
              </div>

              <button type="submit" className="btn-primary">
                Send message
              </button>

              {status && <p className="contact-hint">{status}</p>}
            </form>
          </div>

          <div className="contact-details">
            <div className="contact-pill">
              <span>Availability</span>
              <span>· Open for remote & WFO</span>
            </div>

            <p>
              <strong>Email:</strong> vatsal.chaturvedi0020@gmail.com
              <br />
              <strong>Location:</strong> India (IST)
            </p>

            <p>
              I’m comfortable working with global teams, async communication,
              and collaboration tools like GitHub and project boards.
            </p>

            <div>
              <p>Find me online</p>
              <div className="social-row">
                <a
                  className="social-link"
                  href="https://github.com/vatsal-http"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="social-link"
                  href="https://www.linkedin.com/in/vatsal-chaturvedi-525b95376/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
