import { useReveal } from "../hooks/useReveal";

const Education = ({ title, school, startDate, endDate }) => {
  const ref = useReveal();

  return (
    <div ref={ref} className="card">
      <h4>{title}</h4>
      <div className="meta">{school}</div>
      <div className="date">{startDate} – {endDate}</div>
    </div>
  );
};

export default Education;