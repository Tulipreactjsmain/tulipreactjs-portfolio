import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const useAboutPageScroll = (
  contextRef: React.RefObject<HTMLDivElement | null>
) => {
  useEffect(() => {
    const text = contextRef?.current?.querySelector(".aboutIntroText");

    if (text) {
      let ctx = gsap.context(() => {
        const chars = text.textContent?.split("") || [];
        const spans = chars.map((char, index) => {
          return `<span class="char${index}">${char}</span>`;
        });
        text.innerHTML = spans.join("");
        const timeline = gsap.timeline();
        chars.forEach((char, index) => {
          const tween1 = gsap.to(`.char${index}`, {
            opacity: 0,
            duration: 2.5,
            ease: "power4.inOut",
            delay: 0.1 * index,
          });

          timeline.add(tween1, 0);
        });

        const tween2 = gsap.to(".aboutSecondText", {
          duration: 0.001,
          // ease: "power4.inOut",
          delay: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".vStack",
            start: "bottom+=900vh 30%",
            end: "bottom+=1700vh 30%",
            // markers: true,
            scrub: 0,
          },
        });

        timeline.add(tween2, 0);

        ScrollTrigger.create({
          trigger: ".vStack",
          start: "bottom+=100vh 30%",
          end: "bottom+=900vh 30%",
          scrub: 0,
          // markers: true,
          animation: timeline,
        });
      }, contextRef);

      return () => ctx.revert();
    }
  }, []);
};

export default useAboutPageScroll;

// const tween3 = gsap.to(".animateGradient", {
//   duration: 2.5,
//   rotation: 360, // Rotate 360 degrees
//   ease: "none", // Linear rotation
//   transformOrigin: "center center", // Rotate around the center
// });
