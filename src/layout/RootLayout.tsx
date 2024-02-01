import { FC } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

interface RootLayoutProps {}

const RootLayout: FC<RootLayoutProps> = ({}) => {
  return (
    <>
    <Navbar/>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
