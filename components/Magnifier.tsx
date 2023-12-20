import React, { useState, ReactNode, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Text } from "@chakra-ui/react";
interface MagnifierProps {
  children: ReactNode;
}

const Magnifier: React.FC<MagnifierProps> = ({ children }) => {
  //   console.log("child", (children as React.ReactElement)?.props);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [isMagnifierVisible, setIsMagnifierVisible] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const magnifierRef = useRef(null);

  console.log("isMagnifierVisible", isMagnifierVisible);
  console.log(magnifierRef.current);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log("entry.isIntersecting", entry.isIntersecting);

          entry.isIntersecting
            ? setIsMagnifierVisible(entry.isIntersecting)
            : setIsMagnifierVisible(false);
        });
      },
      {
        root: children && (children as React.ReactElement)?.props.ref?.current,
        threshold: 0.5,
      }
    );

    if (magnifierRef.current) {
      observer.observe(magnifierRef.current);
    }

    return () => {
      if (magnifierRef.current) {
        observer.unobserve(magnifierRef.current);
      }
    };
  }, [children]);

  const handleMouseHover = (e: React.MouseEvent) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setPosition({ x, y });

    setCursorPosition({ x: e.pageX - left, y: e.pageY - top });
  };

  Magnifier.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <Box
      className="magnifier-container"
      height={`full`}
      width={`full`}
      position={`relative`}
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseLeave={() => setShowMagnifier(false)}
      onMouseMove={handleMouseHover}
    >
      {children}
      {showMagnifier ? (
        <Box
          ref={magnifierRef}
          className="magnifier-container"
          style={{
            position: "absolute",
            zIndex: 100,
            left: `${cursorPosition.x - 100}px`,
            top: `${cursorPosition.y - 700}px`,
            pointerEvents: `none`,
          }}
        >
          <Box
            className="magnifier-item"
            width={`35vw`}
            h={`35vw`}
            border={`solid`}
            rounded={`100%`}
            style={{
              backgroundImage: `url(${
                (children as React.ReactElement)?.props.src
              })`,
              backgroundPosition: `${position.x}% ${position.y}%`,
            }}
          />
        </Box>
      ) : (
        isMagnifierVisible === false && (
          <Box
            className="showDirection"
            display={`flex`}
            alignItems={`center`}
            justifyContent={`center`}
            px={`3vw`}
            w={`full`}
            left={0}
            position={`absolute`}
            zIndex={100}
            right={0}
            bottom={0}
          >
            <Text textAlign={`end`} maxW={`7xl`} p={`3vw`} w={`full`}>
              Move Cursor
            </Text>
          </Box>
        )
      )}
    </Box>
  );
};

export default Magnifier;
