import React, { useState, ReactNode } from "react";
import PropTypes from "prop-types";
import { Box, Text } from "@chakra-ui/react";
interface MagnifierProps {
  children: ReactNode;
}

const Magnifier: React.FC<MagnifierProps> = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

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
      color={`#7c7c6f`}
    >
      <Box
        className="blur"
        w={`full`}
        h={`full`}
        zIndex={100}
        position={`absolute`}
        bgGradient="linear(to bottom right, var(--sweet-green-support) 1%, rgba(191, 77, 54, 1) 10%, #BF4D36 1%, rgba(191, 77, 54, 0) 35%, rgba(0, 0, 0, 0) 70%, #476C9B)"
        opacity={0.5}
      ></Box>
      {children}

      {showMagnifier ? (
        <>
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
            <Text
              fontWeight={`bold`}
              textAlign={`end`}
              maxW={`7xl`}
              p={`3vw`}
              w={`full`}
            >
              Sroll down
            </Text>
          </Box>
          <Box
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
              width={`10vw`}
              h={`10vw`}
              rounded={`10%`}
              boxShadow={`md`}
              style={{
                backgroundImage: `url('${
                  (children as React.ReactElement)?.props.src
                }')`,
                backgroundPosition: `${position.x}% ${position.y}%`,
              }}
            />
          </Box>
        </>
      ) : (
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
          {showMagnifier === false && (
            <Text
              fontWeight={`bold`}
              textAlign={`end`}
              maxW={`7xl`}
              p={`3vw`}
              w={`full`}
            >
              Move Cursor
            </Text>
          )}
        </Box>
      )}
    </Box>
  );
};

export default Magnifier;
