import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const useAboutPageScroll = (
  contextRef: React.RefObject<HTMLDivElement | null>
) => {
  useEffect(() => {
    const text = contextRef?.current?.querySelector(".aboutIntroText");

    if (text) {
      const chars = text.textContent?.split("") || [];
      const spans = chars.map((char, index) => {
        return `<span class="char${index}">${char}</span>`;
      });
      text.innerHTML = spans.join("");
      const timeline = gsap.timeline();
      chars.forEach((char, index) => {
        const tween = gsap.to(`.char${index}`, {
          opacity: 0,
          duration: 2.5,
          ease:"power4.inOut",
          delay: 0.5 * index,
        });
        timeline.add(tween, 0);
      });
      let ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: ".vStack",
          start: "bottom+=100vh 30%",
          end: "bottom+=500vh 30%",
          scrub: 5,
          // markers: true,
          animation: timeline,
        });
      }, contextRef);

      return () => ctx.revert();
    }
  }, []);
};

export default useAboutPageScroll;
