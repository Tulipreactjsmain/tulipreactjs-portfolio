import React from "react";
import { Box } from "@chakra-ui/react";

export default function test() {
  return (
    <Box position={`fixed`} width={`full`}>
      <div className="scroll-container">
        <div className="scroll-page" id="page-1">
          1
        </div>
        <div className="scroll-page" id="page-2">
          2
        </div>
        <div className="scroll-page" id="page-3">
          3
        </div>
      </div>
    </Box>
  );
}
