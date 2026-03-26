import { useReveal } from "../hooks/useReveal";

/**
 * Devuelve cards con los idiomas del desarrollador
 * @param {Object} props
 * @returns 
 */
const Languages = ({ items }) => {
  const ref = useReveal();

  return (
    <div ref={ref} className="skills-grid">
      {items.map((lang, i) => (
        <div key={i} className="skill-item">
          {lang}
        </div>
      ))}
    </div>
  );
};

export default Languages;