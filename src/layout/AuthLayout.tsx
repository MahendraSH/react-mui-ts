import { FC } from "react";
import { Outlet } from "react-router-dom";

interface AuthLayoutProps {}

const AuthLayout: FC<AuthLayoutProps> = ({}) => {
  return (
    <>
        <Outlet />
    </>
  );
};

export default AuthLayout;
