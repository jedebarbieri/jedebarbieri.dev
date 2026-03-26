import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.from(footerRef.current.querySelectorAll(".prefooter div, .footer div"), {
      opacity: 0,
      y: 20,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out"
    });
  }, []);

  return (
    <section ref={footerRef} className="footer-section">
      <div className="prefooter">
        <div>This website was built with:</div>
        <div>⚛️ React.js • ⚡ Vite • 🌀 GSAP • 🎨 Custom CSS</div>
      </div>
      <div className="footer">
        © 2026 Justo Debarbieri
      </div>
    </section>
  );
};

export default Footer;