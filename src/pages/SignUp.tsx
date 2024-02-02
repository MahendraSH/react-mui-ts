import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  FormLabel,
  FormControl,
} from "@mui/material";
import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { registorUser } from "../app/user/userSlice";
import { useAppDispatch } from "../app/hooks";

interface SignupProps {}

const Signup: FC<SignupProps> = ({}) => {
  
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const dispacth = useAppDispatch();

  const onSubmithandler = (e: React.FormEvent) => {
    e.preventDefault();

    const user = { email, password, userName };

    dispacth(registorUser(user));
    setEmail("");
    setPassword("");
    setUserName("");
  };
  return (
    <>
      <Container
        maxWidth="sm"
        sx={{
          width: { sm: 1 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: 2,
          borderRadius: 2,
          p: 4,
        }}
      >
        <Typography variant="h3">WelCome To Our Site! </Typography>
        <Typography
          sx={{
            fontSize: 18,
          }}
        >
          Create A Free Account
        </Typography>
        <form className="login-form" onSubmit={onSubmithandler}>
          <Box
            sx={{
              width: { sm: 1, md: 400 },
              mt: "4rem",
              mx: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              boxShadow: 1,
              p: 5,
              gap: "2rem",
              borderRadius: 2,
            }}
          >
            <FormControl>
              <FormLabel>Name</FormLabel>
              <TextField
                variant="filled"
                name="name"
                type="text"
                placeholder="user name "
                value={userName}
                onChange={(e) => {
                  e.preventDefault();
                  setUserName(e.target.value);
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <TextField
                variant="filled"
                name="email"
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => {
                  e.preventDefault();
                  setEmail(e.target.value);
                }}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Password</FormLabel>
              <TextField
                variant="filled"
                name="password"
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => {
                  e.preventDefault();
                  setPassword(e.target.value);
                }}
              />
            </FormControl>
            <Button variant="contained" type="submit">
              Sign Up
            </Button>
          </Box>
          <Box sx={{ mx: "auto", p: 2, mt: 1 }}>
            <Typography>
              Have an accont please <Link to={"/signin"}>Sgin In </Link>
            </Typography>
          </Box>
        </form>
      </Container>
    </>
  );
};

export default Signup;
