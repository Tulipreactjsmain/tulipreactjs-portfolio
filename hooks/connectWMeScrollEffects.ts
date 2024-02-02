import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const useconnectWMeScroll = (
  contextRef: React.RefObject<HTMLDivElement | null>
) => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tween1 = gsap.to(`.featurProjects`, {
        opacity: 0,
        duration: 13,
        ease: `power4.out`,
        delay: 0,
      });
      const tween2 = gsap.to(".connect", {
        opacity: 1,
        duration: 7,
        ease: `power4.out`,
        delay: 2,
        zIndex: 2000,
      });

      const timeline = gsap.timeline();
      timeline.add(tween1, 0);
      timeline.add(tween2, 0);

      ScrollTrigger.create({
        trigger: ".connect-opener",
        start: "top bottom",
        end: "bottom+=500vh 30%",
        scrub: 1,
        pin: true,
        // markers: true,
        animation: timeline,
      });
    }, contextRef);

    return () => ctx.revert();
  }, []);
};

export default useconnectWMeScroll;
