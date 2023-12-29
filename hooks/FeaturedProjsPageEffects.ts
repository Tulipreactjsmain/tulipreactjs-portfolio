import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

const FeaturedProjsPageEffects = (
  contextRef: React.RefObject<HTMLDivElement | null>
) => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      const text = contextRef?.current?.querySelector(".aboutSecondText");
      const chars = text?.textContent?.split("") || [];
      const spans = chars.map((char, index) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.className = `ftchar${index}`;
        return span;
      });

      text?.replaceChildren(...spans);
      const timeline = gsap.timeline();

      chars.forEach((char, index) => {
        const tween1 = gsap.to(`.ftchar${index}`, {
          opacity: 0,
          duration: 2.5,
          ease: "power4.inOut",
          delay: 0.1 * index,
        });
        timeline.add(tween1, 0);
      });
      const tween2 = gsap.to(".featurProjects", {
        opacity: 1,
        duration: 2,
        ease: `power4.in`,
        zIndex: 2000,
        delay: 3.5,
      });

      timeline.add(tween2, 0);

      ScrollTrigger.create({
        trigger: ".vStack",
        start: "bottom+=2500vh 30%",
        end: "bottom+=3200vh 30%",
        scrub: 0,
        // markers: true,
        animation: timeline,
      });
    }, contextRef);

    return () => ctx.revert();
  }, []);
};

export default FeaturedProjsPageEffects;
