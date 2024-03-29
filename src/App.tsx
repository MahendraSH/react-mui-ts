import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import Signup from "./pages/SignUp";
import AuthLayout from "./layout/AuthLayout";
import GestRouteLayout from "./layout/GestRouteLayout";

interface AppProps {}

const App: FC<AppProps> = ({}) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<GestRouteLayout />}>
          <Route index element={<Home />} />
          <Route element={<RootLayout />}>
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
