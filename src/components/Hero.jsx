import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });
    
    tl.from(heroRef.current.querySelectorAll("h1, h2, p, .contact div"), {
      opacity: 0,
      y: 30,
      stagger: 0.2
    });
  }, []);

  return (
    <section ref={heroRef} className="hero">
      <h1>Justo Debarbieri</h1>
      <h2>Fullstack Web Developer | Laravel, API Design | UX-focused</h2>

      <p>
        Fullstack developer specialized in <b>PHP</b> and <b>Laravel</b>, with a strong drive for building scalable, maintainable, and user-centric solutions. Passionate about crafting software that solves real-world problems and contributes to meaningful impact, I’m seeking challenges that allow me to grow while delivering value through clean, robust code.
      </p>

      <div className="contact">
        <div>📍 Lisbon, Portugal</div>
        <div>✉️ jedebarbieri@gmail.com</div>
        <div>📞 +351 911 154 647</div>
      </div>
    </section>
  );
};

export default Hero;