import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
const useScroll = (contextRef: React.RefObject<HTMLDivElement | null>) => {
  useEffect(() => {
    const isLargeScreen = window.innerWidth > 1024;

    if (isLargeScreen) {
      let ctx = gsap.context(() => {
        const tween = gsap.to(".firstName", {
          x: -600,
          opacity: 0,
          duration: 3,
          ease: `power4.Out`,
        });

        gsap.to(".surname", {
          x: 600,
          opacity: 0,
          height: "100vh",
          width: "100vw",
          scrollTrigger: {
            trigger: "",
            start: "25% 30%",
            end: "100% 30% ",
            scrub: 1,
          },
        });

        ScrollTrigger.create({
          trigger: ".vStack",
          start: "25% 30%",
          end: "100% 30% ",
          pin: true,
          animation: tween,
          scrub: 1,
        });
      }, contextRef);

      return () => ctx.revert();
    }
  }, [contextRef]);
};

export default useScroll;
