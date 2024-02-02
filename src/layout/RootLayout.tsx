import { FC, useEffect } from "react";
import Navbar from "../components/navbar";
import { useAppSelector } from "../app/hooks";
import { Outlet, useNavigate } from "react-router-dom";

interface RootLayoutProps {}

const RootLayout: FC<RootLayoutProps> = ({}) => {
  const user = useAppSelector((state) => state.userReducers.user);
  const naviagte = useNavigate();
  useEffect(() => {
    if (!user.id) {
      naviagte("/signin");
    }
  }, [user.id]);
  if (user.id) {
    return (
      <>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </>
    );
  }
  return null;
};

export default RootLayout;
