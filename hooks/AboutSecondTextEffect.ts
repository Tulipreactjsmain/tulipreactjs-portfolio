import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const useAboutSecondTextScroll = (
  contextRef: React.RefObject<HTMLDivElement | null>
) => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      const timeline = gsap.timeline();

      const tween1 = gsap.to(".aboutSecondText", {
        duration: 0.001,
        // ease: "power4.inOut",
        delay: 0,
        opacity: 1,
      });
      timeline.add(tween1, 0);

      ScrollTrigger.create({
        trigger: ".aboutSecondText-opener",
        // start: "bottom+=900vh 30%",
        start: "top bottom",
        end: "bottom+=1700vh 30%",
        pin: true,
        // markers: true,
        scrub: 0,
        animation: timeline,
      });
    }, contextRef);

    return () => ctx.revert();
  }, []);
};

export default useAboutSecondTextScroll;
