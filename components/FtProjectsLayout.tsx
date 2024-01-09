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
      justifyContent={`center`}
      alignItems={`center`}
      left={0}
      top={0}
      right={0}
      position={`fixed`}
      zIndex={0}
      opacity={0}
      h={`100vh`}
      color={`#7c7c6f`}
    >
      <Box
        maxW={`7xl`}
        px={`3vw`}
        w={`full`}
        h={`full`}
        display={`flex`}
        flexDirection={`column`}
        justifyContent={`center`}
      >
        {children}
      </Box>
    </Box>
  );
};

export default FtProjectsLayout;
