import { Container } from "@chakra-ui/react";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <Container position={`relative`} className="" m={0} p={0} w={'full'} maxW={'full'}>{children}</Container>;
};

export default Layout;
