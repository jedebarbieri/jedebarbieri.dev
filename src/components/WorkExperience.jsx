const WorkExperience = ({ position, company, location, startDate, endDate, description }) => {

  return (
    <div className="card" data-aos="fade-up">
      <h4>{position}</h4>
      <div className="meta">
        <strong>{company}</strong> — {location}
      </div>
      <div className="date">{startDate} – {endDate}</div>
      <div className="desc">{description}</div>
    </div>
  );
};

export default WorkExperience;

