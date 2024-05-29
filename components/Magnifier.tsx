import React, { useState, useEffect, ReactNode } from "react";
import PropTypes from "prop-types";
import { Box, Text } from "@chakra-ui/react";
import { CustomGikite } from ".";
interface MagnifierProps {
  children: ReactNode;
}
export let scrollPosition: number;

const Magnifier: React.FC<MagnifierProps> = ({ children }) => {
  const [scrollDegree, setScrollDegree] = useState(90);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseHover = (e: React.MouseEvent) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();

    setCursorPosition({ x: e.pageX - left, y: e.pageY - top });
  };

  Magnifier.propTypes = {
    children: PropTypes.node.isRequired,
  };

  useEffect(() => {
    const handleScroll = () => {
      scrollPosition = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const normalizedScroll = Math.min(1, scrollPosition / maxScroll);
      const scalingFactor = 2;
      const newDegree = normalizedScroll * 360 * scalingFactor;

      setScrollDegree(newDegree);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const linearGradient = `linear(${scrollDegree}deg, var(--sweet-green-support) 1%, rgba(191, 77, 54, 1) 10%, #BF4D36 1%, rgba(191, 77, 54, 0) 35%, rgba(0, 0, 0, 0) 70%, #476C9B)`;

  return (
    <Box
      className="magnifier-container"
      height={`full`}
      width={`full`}
      position={`relative`}
      onMouseMove={handleMouseHover}
      color={`#7c7c6f`}
    >
      <Box
        className="animateGradient"
        w={`full`}
        h={`full`}
        zIndex={100}
        position={`absolute`}
        opacity={0.4}
        bgGradient={linearGradient}
      ></Box>

      <CustomGikite scrollDegree={scrollDegree} />
      {children}
    </Box>
  );
};

export default Magnifier;
