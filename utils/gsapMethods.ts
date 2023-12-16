import { gsap } from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";

gsap.registerPlugin(TextPlugin);
type MethodProps = {
  elementRefs: React.RefObject<HTMLDivElement | null>[];
};

const gsapMethods = ({ elementRefs }: MethodProps): void => {
  elementRefs.forEach((ref) => {
    const hi: Element | null | undefined = ref.current?.querySelector("p.hi");
    const name: Element | null | undefined =
      ref.current?.querySelector("h1.name");
    const about: Element | null | undefined =
      ref.current?.querySelector("div.about");
    const hiHighlight: Element | null | undefined =
      ref.current?.querySelector("span.hiHighlight");
    const occupation: Element | null | undefined =
      ref.current?.querySelector("p.occupation");
      

    let botTl = gsap.timeline();

    botTl
      .to(hiHighlight as Element, {
        duration: 1,
        opacity: 1,
        width: `60px`,
        delay: 0.5,
        ease: "powe4.inOut",
      })
      .to(hiHighlight as Element, {
        duration: 1,
        delay: 3.2,
        height: "22px",
        ease: `elastic.out`,
      });
    gsap.to(hi as Element, {
      duration: 1,
      delay: 1,
      text: "Hi, I'm",
      ease: "none",
    });
    gsap.from(name as Element, {
      duration: 2.5,
      opacity: 0,
      ease: "elastic.out(2,0.75)",
      y: 150,
      delay: 2.5,
    });
    gsap.to(name as Element, {
      duration: 2.5,
      delay: 2.5,
      opacity: 1,
      ease: "elastic.out(1,0.2)",
      y: 0,
    });
    gsap.to(occupation as Element, {
        duration: 2.5,
        delay: 3,
        opacity: 1,
        ease: "power1.out",
        y: 0,
      });
    gsap.from(about as Element, {
      duration: 0.8,
      opacity: 0,
      x: -150,
      delay: 3.5,
    });
    gsap.to(about as Element, {
      duration: 0.8,
      opacity: 1,
      ease: "power1.out",
      x: 0,
      delay: 3.5,
    });
  });
};

export default gsapMethods;
