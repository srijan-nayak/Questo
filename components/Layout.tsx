import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <div className="container mx-auto px-4">{children}</div>;
};

export default Layout;
