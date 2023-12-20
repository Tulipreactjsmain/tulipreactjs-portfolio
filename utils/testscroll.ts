import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useScroll = (): void => {
  useEffect(() => {
    gsap.utils.toArray<HTMLElement>('.section').forEach((section, index) => {
      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top top', // Trigger animation at the top of each section
          end: 'bottom top', 
          pin: true,// End animation at the bottom of each section
          scrub: 1, // Smooth scrolling effect
          markers: true, // Optional: Display markers for debugging
        },
        opacity: 1, // Fade in each section
        y: 0, // Move each section into view
      });
    });
  }, []);
};

export default useScroll;
