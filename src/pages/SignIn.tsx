import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  FormLabel,
  FormControl,
} from "@mui/material";
import { FC, useState } from "react";
import { Link,  } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { loginUser } from "../app/user/userSlice";

interface SignInProps {}

const SignIn: FC<SignInProps> = ({}) => {

  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmithandler = (e: React.FormEvent) => {
    e.preventDefault();
    const user = {
      userName: "userName",
      password,
      email,
    };
    dispatch(loginUser(user));
    setEmail("");
    setPassword("");
  };

  return (
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
      <Typography variant="h3">WelCome! </Typography>
      <Typography
        sx={{
          fontSize: 18,
        }}
      >
        Sigin To Continue
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
            Login
          </Button>
        </Box>
        <Box sx={{ mx: "auto", p: 2, mt: 1 }}>
          <Typography>
            Don`t have an accont please <Link to={"/signup"}>Sgin Up </Link>
          </Typography>
        </Box>
      </form>
    </Container>
  );
};

export default SignIn;
