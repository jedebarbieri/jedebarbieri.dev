import { useReveal } from "../hooks/useReveal";

/**
 * Devuelve cards con las habilidades del desarrollador
 * @param {Object} props
 * @returns 
 */
const Skills = ({ items }) => {
  const ref = useReveal();

  return (
    <div ref={ref} className="skills-grid">
      {items.map((skill, i) => (
        <div key={i} className="skill-item">
          {skill}
        </div>
      ))}
    </div>
  );
};

export default Skills;