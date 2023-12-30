import { Box } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import throttle from "lodash/throttle";

const CursorChaser: React.FC = () => {
  const [chaserPosition, setChaserPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId: any;

    const handleMouseMove = (e: MouseEvent) => {
      clearTimeout(animationFrameId);
      animationFrameId = setTimeout(() => {
        setChaserPosition({ x: e.clientX, y: e.clientY });
      }, 16);
    };

    const throttledMouseMove = throttle(handleMouseMove, 16);
    document.addEventListener("mousemove", throttledMouseMove);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return (
    <>
      <Box
        className="cursorChaser"
        style={{
          position: "fixed",
          top: chaserPosition.y + -5,
          left: chaserPosition.x,
          transition: "all ease-out 0.6s ;",
          width: "15px",
          height: "15px",
          backgroundColor: "#EFD780",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      ></Box>
    </>
  );
};

export default CursorChaser;
