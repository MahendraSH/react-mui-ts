import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  FormLabel,
  FormControl,
} from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";

interface SignupProps {}

const Signup: FC<SignupProps> = ({}) => {
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
        <form className="login-form">
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
              />
            </FormControl>

            <FormControl>
              <FormLabel>Password</FormLabel>
              <TextField
                variant="filled"
                name="password"
                type="password"
                placeholder="password"
              />
            </FormControl>
            <Button variant="contained">Login</Button>
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
