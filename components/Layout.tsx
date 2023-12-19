import { Container } from "@chakra-ui/react";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <Container position={`relative`} maxW={`7xl`} p={`3vw`}>{children}</Container>;
};

export default Layout;
