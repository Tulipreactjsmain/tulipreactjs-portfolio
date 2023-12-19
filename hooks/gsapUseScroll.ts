import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
const useScroll = (contextRef: React.RefObject<HTMLDivElement | null>) => {
  useEffect(() => {
    const test = true;
    const isLargeScreen = window.innerWidth > 1024;
    const isMediumScreen = window.innerWidth <= 1024 && window.innerWidth > 768;
    const isSmallScreen = window.innerWidth <= 768;

    function getScrollAmount(element: HTMLElement | null) {
      let elementWidth: number | undefined = element?.scrollWidth;
      return elementWidth && elementWidth - window.innerWidth;
    }

    if (test) {
      let firstNAmeElement = contextRef.current?.querySelector(
        ".firstName"
      ) as HTMLElement | null;
      if (firstNAmeElement) {
        let amountToScroll = getScrollAmount(firstNAmeElement);
        console.log("amounttoscroll", amountToScroll);

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

          const timeline = gsap.timeline();
          timeline.add(tween1, 0);
          timeline.add(tween2, 0);
          timeline.add(tween3, 0);

          ScrollTrigger.create({
            trigger: ".vStack",
            // ${isLargeScreen ? '32%' : isMediumScreen ? '54%' : "37%"}
            start: `32% 30%,`,
            end: "100% 30% ",
            pin: true,
            pinSpacing: false,
            
            animation: timeline,
            scrub: 1,
            // markers: true,
            invalidateOnRefresh: true
          });
        }, contextRef);

        return () => ctx.revert();
      }
    }
  }, [contextRef]);
};

export default useScroll;
