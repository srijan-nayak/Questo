import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <div className="container mx-auto max-w-screen-md px-4">{children}</div>;
};

export default Layout;
