import { log } from "console";
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
    console.log(name);

    gsap.to(hi as Element, {
      duration: 1,
      text: "Hi, I'm",
      ease: "none",
    });
    gsap.from(name as Element, {
      duration: 2.5,
      opacity: 0,
      ease: "elastic.out(2,0.75)",
      y: 150,
      delay: 1.2,
    });
    gsap.to(name as Element, {
      duration: 2.5,
      delay: 1.2,
      opacity: 1,
      ease: "elastic.out(1,0.2)",
      y: 1,
    });
  });
};

export default gsapMethods;
