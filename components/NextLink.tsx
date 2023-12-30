import Link from "next/link";
import { ReactNode } from "react";

interface NextLinkProps {
  href: string;
  children: ReactNode;
}
const NextLink: React.FC<NextLinkProps> = ({ children, href }) => {
  return <Link href={`${href}`}>{children}</Link>;
};

export default NextLink