/**
 * Devuelve cards con los idiomas del desarrollador
 * @param {Object} props
 * @returns 
 */
const Languages = ({ items }) => {
  return (
    <div className="skills-grid" data-aos="fade-left">
      {items.map((lang, i) => (
        <div key={i} className="skill-item">
          {lang}
        </div>
      ))}
    </div>
  );
};

export default Languages;