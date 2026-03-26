import { useReveal } from '../hooks/useReveal';

const WorkExperience = ({ position, company, location, startDate, endDate, description }) => {
  const ref = useReveal();

  return (
    <div ref={ref} className="card">
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

