function SkillBar({ label, value }) {
  return (
    <div className="skill-bar-row">
      <div className="skill-bar-label">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill visible"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export default SkillBar;
