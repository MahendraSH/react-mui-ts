import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Site
        </Typography>
        <Link to={"/signin"}>
          <Button color="inherit">Login</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
