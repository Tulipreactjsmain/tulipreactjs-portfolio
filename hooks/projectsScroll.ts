import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

const projectsScroll = (contextRef: React.RefObject<HTMLDivElement | null>) => {
  useEffect(() => {
    const projectsContainer = contextRef?.current?.querySelector("div.projs");
    let projectsContainerHeight: number;
    const scrollBoxRef = contextRef?.current?.querySelector(
      "div.scroll-box"
    ) as HTMLElement;

    if (projectsContainer) {
      projectsContainerHeight =
        projectsContainer.getBoundingClientRect().height;
    } else {
      console.log("projectsContainer is not defined");
    }

    let ctx = gsap.context(() => {
      const timeline =gsap.timeline({
        onUpdate: () => {
          if (scrollBoxRef) {
            const progress = timeline.progress();
            const maxScrollTop = projectsContainerHeight - scrollBoxRef.clientHeight;
            scrollBoxRef.scrollTop = maxScrollTop * progress;
          }
        }
      });
      const tween1 = gsap.to(".projs", {
        y: -projectsContainerHeight + 500,
        ease: `power4.out`,
        delay: 0,
      });

      timeline.add(tween1, 0);

      ScrollTrigger.create({
        trigger: ".projs-scroll",
        start: "top+=-500 bottom",
        end: `bottom+=${projectsContainerHeight} bottom`,
        scrub: 1,
        pin: true,
        // markers: true,
        animation: timeline,
        // onEnter: () => {
        //   if (scrollBoxRef) {
        //     scrollBoxRef.style.overflowY = "scroll";
        //   }
        // },
        // onLeave: () => {
        //   if (scrollBoxRef) {
        //     scrollBoxRef.style.overflowY = "hidden";
        //   }
        // },
        // onEnterBack: () => {
        //   if (scrollBoxRef) {
        //     scrollBoxRef.style.overflowY = "scroll";
        //   }
        // },
        // onLeaveBack: () => {
        //   if (scrollBoxRef) {
        //     scrollBoxRef.style.overflowY = "hidden";
        //   }
        // },
      });
    }, contextRef);

    return () => ctx.revert();
  }, []);
};

export default projectsScroll;
