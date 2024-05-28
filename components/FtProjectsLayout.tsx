import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}
const FtProjectsLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      className="featurProjects"
      id="projects"
      w={`100%`}
      display={`flex`}
      flexDirection={`column`}
      alignItems={`center`}
      left={0}
      top={0}
      right={0}
      position={`fixed`}
      zIndex={0}
      opacity={0}
      color={`#7c7c6f`}
      h={`100vh`}
    >
      <Box
        maxW={`95rem`}
        px={`3vw`}
        w={`full`}
        h={`100vh`}
        overflowY={"visible"}
        className={"moveToConnectPage"}
      >
        {children}
      </Box>
    </Box>
  );
};

export default FtProjectsLayout;
