import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const useconnectWMeScroll = (
  contextRef: React.RefObject<HTMLDivElement | null>
) => {
  useEffect(() => {
    const connectContainer = contextRef?.current?.querySelector("div.projs");
    let connectContainerHeight: number;

    if (connectContainer) {
      connectContainerHeight =
        connectContainer.getBoundingClientRect().height;
    } else {
      console.log("connectContainer is not defined");
    }
    let ctx = gsap.context(() => {
      const tween1 = gsap.to(`.moveToConnectPage`, {
        yPercent: -100,
        ease: `power4.out`,
        delay: 0,
      });

      const timeline = gsap.timeline();
      timeline.add(tween1, 0);
      // // timeline.add(tween2, 0);

      ScrollTrigger.create({
        trigger: ".connect-opener",
        start: "top bottom",
        end: `bottom+=${connectContainerHeight} bottom`,
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
