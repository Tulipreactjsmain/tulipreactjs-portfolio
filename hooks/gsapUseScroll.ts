import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
const useScroll = (
  contextRef: React.RefObject<HTMLDivElement | HTMLButtonElement | null>
) => {
  useEffect(() => {
    const navBtn = contextRef?.current?.querySelector("button.btn-43");
    const navLinks = contextRef?.current?.querySelector("div.navLinks");
    const isLargeScreen = window.innerWidth > 1024;
    const isMediumScreen = window.innerWidth <= 1024 && window.innerWidth > 768;

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
        y: 200,
        opacity: 0,
        duration: 1,
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
        zIndex: 2000,
      });

      const timeline = gsap.timeline();
      timeline.add(tween1, 0);
      timeline.add(tween2, 0);
      timeline.add(tween3, 0);
      timeline.add(tween4, 0);
      timeline.add(tween5, 0);

      ScrollTrigger.create({
        trigger: ".vStack",
        start: `${
          isLargeScreen ? "24.7%" : isMediumScreen ? "28%" : "29%"
        } 30%,`,
        end: "100% 30% ",
        pin: true,
        animation: timeline,
        scrub: 2,
        // markers: true,
        onUpdate: (self) => {
          if (self.progress > 0.5) {
            navBtn?.classList.add("update-nav-btn");
            navLinks?.classList.add("update-nav-links");
          } else {
            navBtn?.classList.remove("update-nav-btn");
            navLinks?.classList.remove("update-nav-links");
          }
        },
        invalidateOnRefresh: true,
      });
    }, contextRef);

    return () => ctx.revert();
  }, []);
};

export default useScroll;
