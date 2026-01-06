function ProjectCard({ type, title, description, tags, link, status }) {
  return (
    <article className="project-card">
      <div className="project-chip">{type}</div>
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>

      <div className="project-tags">
        {tags.map((t) => (
          <span key={t} className="project-tag">
            {t}
          </span>
        ))}
      </div>

      <div className="project-footer">
        <a href={link} className="project-link" target="_blank" rel="noreferrer">
          View project ↗
        </a>
        <div className="project-pill-status">{status}</div>
      </div>
    </article>
  );
}

export default ProjectCard;
