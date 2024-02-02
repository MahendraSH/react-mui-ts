import { FC, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

interface AuthLayoutProps {}

const AuthLayout: FC<AuthLayoutProps> = ({}) => {
  const naviagte = useNavigate();
  const user = useAppSelector((state) => state.userReducers.user);
  useEffect(() => {
    if (user?.id) {
      naviagte("/");
    }
  }, [user?.id]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default AuthLayout;
