const Education = ({ title, school, startDate, endDate }) => {
  return (
    <div className="card" data-aos="fade-up">
      <h4>{title}</h4>
      <div className="meta">{school}</div>
      <div className="date">{startDate} – {endDate}</div>
    </div>
  );
};

export default Education;