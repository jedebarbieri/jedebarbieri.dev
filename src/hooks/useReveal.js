import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const useReveal = () => {
  const ref = useRef();

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        y: 40
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }
    );
  }, []);

  return ref;
};