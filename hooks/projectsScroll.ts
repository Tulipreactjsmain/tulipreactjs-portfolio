import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

const projectsScroll = (contextRef: React.RefObject<HTMLDivElement | null>) => {
  useEffect(() => {
    const projectsContainer = contextRef?.current?.querySelector("div.projs");
    let projectsContainerHeight: number;

    if (projectsContainer) {
      projectsContainerHeight =
        projectsContainer.getBoundingClientRect().height;
    } else {
      console.log("projectsContainer is not defined");
    }

    let ctx = gsap.context(() => {
      const timeline = gsap.timeline();
      const tween1 = gsap.to(".projs", {
        y: -projectsContainerHeight + 500,
        ease: `power4.out`,
        delay: 0,
      });

      timeline.add(tween1, 0);

      ScrollTrigger.create({
        trigger: ".projs-scroll",
        start: "top bottom",
        end: `bottom+=${projectsContainerHeight} bottom`,
        scrub: 1,
        pin: true,
        // markers: true,
        animation: timeline,
      });
    }, contextRef);

    return () => ctx.revert();
  }, []);
};

export default projectsScroll;
