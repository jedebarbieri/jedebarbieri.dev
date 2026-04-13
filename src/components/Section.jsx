const Section = ({ title, children }) => {
  return (
    <section className="section">
      <h3 className="section-title" data-aos="fade-left">
        {title}
      </h3>
      <div>{children}</div>
    </section>
  );
};

export default Section;