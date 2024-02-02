import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { logOutUser } from "../app/user/userSlice";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const navgate = useNavigate();
  const user = useAppSelector((state) => state.userReducers.user);
  const dispacth = useAppDispatch();
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Site
        </Typography>
        {user.id ? (
          <>
            <Link to={"/contact"}>
              <Button color="inherit">contact</Button>
            </Link>
            <Link to={"/contact"}>
              <Button color="inherit">about</Button>
            </Link>
            <Button
              color="inherit"
              onClick={(e) => {
                e.preventDefault();
                console.log("log out");
                dispacth(logOutUser());
              }}
            >
              logout
            </Button>
          </>
        ) : (
          <Link to={"/signin"}>
            <Button color="inherit">Login</Button>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
