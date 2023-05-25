import { ReactNode } from "react";
import NavBar from "@/components/nav-bar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container flex flex-col gap-4 mx-auto max-w-screen-md px-4 pb-8">
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
