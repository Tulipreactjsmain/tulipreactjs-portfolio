import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
const useScroll = (contextRef: React.RefObject<HTMLDivElement | null>) => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tween1 = gsap.to(".firstName", {
        x: -800,
        opacity: 0,
        duration: 3,
        ease: `power4.Out`,
      });

      const tween2 = gsap.to(".surname", {
        x: 900,
        opacity: 0,
        duration: 3,
        ease: `power4.Out`,
      });

      const tween3 = gsap.to(".title", {
        y: 700,
        opacity: 0,
        duration: 3,
        ease: `power4.Out`,
      });

      const tween4 = gsap.to(".introText", {
        opacity: 0,
        duration: 3,
        ease: `power4.Out`,
      });

      const tween5 = gsap.to(".about", {
        opacity: 1,
        duration: 3,
        ease: `power4.Out`,
      });

      const timeline = gsap.timeline();
      timeline.add(tween1, 0);
      timeline.add(tween2, 0);
      timeline.add(tween3, 0);
      timeline.add(tween4, 0);
      timeline.add(tween5, 0);

      ScrollTrigger.create({
        trigger: ".vStack",
        start: `32% 30%,`,
        end: "100% 30% ",
        pin: true,
        pinSpacing: false,

        animation: timeline,
        scrub: 1,
        // markers: true,
        invalidateOnRefresh: true,
      });
    }, contextRef);

    return () => ctx.revert();
  }, []);
};

export default useScroll;
