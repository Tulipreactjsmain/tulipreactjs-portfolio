import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

const projectsScroll = (contextRef: React.RefObject<HTMLDivElement | null>) => {
  useEffect(() => {
    const projectsContainer = contextRef?.current?.querySelector("div.projs");

    const scrollBoxRef = contextRef?.current?.querySelector(
      "div.scroll-box"
    ) as HTMLElement;

    if (!projectsContainer || !scrollBoxRef) {
      console.log("projectsContainer or scrollBoxRef is not defined");
      return;
    }
    const projectsContainerHeight: number =
      projectsContainer.getBoundingClientRect().height;
    const scrollBoxHeight = scrollBoxRef.getBoundingClientRect().height;
    const maxScrollTop = projectsContainerHeight - scrollBoxHeight;

    const smoothScroll = (targetScrollTop: number) => {
      const scroll = () => {
        const scrollTop = scrollBoxRef.scrollTop;
        const distance = targetScrollTop - scrollTop;
        if (Math.abs(distance) > 1) {
          scrollBoxRef.scrollTop = scrollTop + distance * 0.1;
          requestAnimationFrame(scroll);
        } else {
          scrollBoxRef.scrollTop = targetScrollTop;
        }
      };
      requestAnimationFrame(scroll);
    };

    let ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        onUpdate: () => {
          if (scrollBoxRef) {
            const progress = timeline.progress();
            const targetScrollTop = maxScrollTop * progress;
            smoothScroll(targetScrollTop);
          }
        },
      });
      const tween1 = gsap.to(".projs", {
        y: -(projectsContainerHeight - scrollBoxHeight),
        ease: `easeInOut`,
        delay: 0,
      });

      timeline.add(tween1, 0);

      ScrollTrigger.create({
        trigger: ".projs-scroll",
        start: "top bottom",
        end: `bottom+=${projectsContainerHeight} bottom`,
        scrub: 2,
        pin: true,
        // markers: true,
        animation: timeline,
      });
    }, contextRef);

    return () => ctx.revert();
  }, []);
};

export default projectsScroll;
