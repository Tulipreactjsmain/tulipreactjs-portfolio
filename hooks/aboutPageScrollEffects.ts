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
      let ctx = gsap.context(() => {
        const chars = text.textContent?.split("") || [];
        const spans = chars.map((char, index) => {
          return `<span class="char${index}">${char}</span>`;
        });
        text.innerHTML = spans.join("");
        const timeline = gsap.timeline();
        chars.forEach((char, index) => {
          const tween1 = gsap.to(`.char${index}`, {
            opacity: 0,
            duration: 2.5,
            ease: "power4.inOut",
            delay: 0.1 * index,
          });

          timeline.add(tween1, 0);
        });

        gsap.to(".round-circle", {
          duration: 2.5,
          y: 25,
          rotation: 360,
          ease: "none",
          transformOrigin: "center center",
          repeat: -1,
          yoyo: true,
        });

        gsap.to(".square-box", {
          duration: 2.5,
          y: 25,
          rotation: 360,
          ease: "none",
          transformOrigin: "center center",
          repeat: -1,
          yoyo: true,
        });

        const tween2 = gsap.to(".featurProjects", {
          zIndex: 2000,
        });
        timeline.add(tween2, 0);

        ScrollTrigger.create({
          trigger: ".aboutPage-opener",
          // trigger: ".vStack",
          start: "top bottom",
          end: "bottom+=900vh 30%",
          pin:true,
          scrub: 0,
          // markers: true,
          animation: timeline,
        });
      }, contextRef);

      return () => ctx.revert();
    }
  }, []);
};

export default useAboutPageScroll;
