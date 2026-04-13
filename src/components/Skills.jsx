/**
 * Devuelve cards con las habilidades del desarrollador
 * @param {Object} props
 * @returns 
 */
const Skills = ({ items }) => {
  return (
    <div className="skills-grid" data-aos="fade-left">
      {items.map((skill, i) => (
        <div key={i} className="skill-item">
          {skill}
        </div>
      ))}
    </div>
  );
};

export default Skills;