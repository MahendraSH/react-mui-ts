import { FC } from "react";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

interface GestRouteLayoutProps {}

const GestRouteLayout: FC<GestRouteLayoutProps> = ({}) => {
  return (
    <>
      <Navbar />
      <Container
        sx={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Outlet />
      </Container>
    </>
  );
};

export default GestRouteLayout;
