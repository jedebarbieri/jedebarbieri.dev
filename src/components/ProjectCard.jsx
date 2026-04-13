const ProjectCard = ({ title, description, techs }) => {

  return (
    <div className="card project-card" data-aos="fade-up">
      <h4>{title}</h4>
      <div className="desc">{description}</div>
      <div className="tech-tags mt-4">
        {techs.map((tech, i) => (
          <span key={i}>{tech}</span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;